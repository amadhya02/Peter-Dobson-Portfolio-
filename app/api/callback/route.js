import { NextResponse } from 'next/server';

// Step 2 of the Decap CMS "GitHub backend" OAuth flow. GitHub redirects the
// popup here with a one-time `code`; we exchange it server-side for an
// access token (the only place client_secret is ever used) and hand the
// token back to the CMS window via the postMessage handshake it expects.
export const dynamic = 'force-dynamic';

function popupHtml(message) {
  // Decap (like Netlify CMS before it) expects the popup to announce itself,
  // wait for the opener's reply so it can read a trustworthy origin off that
  // reply, then post the real payload back to exactly that origin.
  const script = `
    (function () {
      function receiveMessage(e) {
        window.opener.postMessage(${JSON.stringify(message)}, e.origin);
        window.removeEventListener('message', receiveMessage, false);
      }
      window.addEventListener('message', receiveMessage, false);
      window.opener.postMessage('authorizing:github', '*');
    })();
  `;
  return new NextResponse(`<!doctype html><html><body><script>${script}</script></body></html>`, {
    headers: { 'content-type': 'text/html; charset=utf-8' },
  });
}

export async function GET(request) {
  const url = new URL(request.url);
  const code = url.searchParams.get('code');
  const state = url.searchParams.get('state');
  const cookieState = request.cookies.get('decap_oauth_state')?.value;

  if (!code || !state || state !== cookieState) {
    return popupHtml(`authorization:github:error:${JSON.stringify({ message: 'Invalid or expired login attempt. Please try again.' })}`);
  }

  const clientId = process.env.GITHUB_OAUTH_CLIENT_ID;
  const clientSecret = process.env.GITHUB_OAUTH_CLIENT_SECRET;
  if (!clientId || !clientSecret) {
    return popupHtml(`authorization:github:error:${JSON.stringify({ message: 'Server is missing GitHub OAuth credentials.' })}`);
  }

  const tokenResponse = await fetch('https://github.com/login/oauth/access_token', {
    method: 'POST',
    headers: { 'content-type': 'application/json', accept: 'application/json' },
    body: JSON.stringify({ client_id: clientId, client_secret: clientSecret, code }),
  });
  const tokenData = await tokenResponse.json();

  if (!tokenData.access_token) {
    return popupHtml(`authorization:github:error:${JSON.stringify({ message: tokenData.error_description || 'GitHub did not return an access token.' })}`);
  }

  const response = popupHtml(`authorization:github:success:${JSON.stringify({ token: tokenData.access_token, provider: 'github' })}`);
  response.cookies.delete('decap_oauth_state');
  return response;
}

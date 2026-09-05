import { NextResponse } from 'next/server';
import crypto from 'node:crypto';

// Step 1 of the Decap CMS "GitHub backend" OAuth flow: the CMS opens this
// route in a popup, we redirect to GitHub's own authorize screen, and GitHub
// sends the user back to /api/callback with a one-time code.
export const dynamic = 'force-dynamic';

export async function GET(request) {
  const clientId = process.env.GITHUB_OAUTH_CLIENT_ID;
  if (!clientId) {
    return new NextResponse('Server is missing GITHUB_OAUTH_CLIENT_ID.', { status: 500 });
  }

  const origin = new URL(request.url).origin;
  const state = crypto.randomBytes(16).toString('hex');

  const authorizeUrl = new URL('https://github.com/login/oauth/authorize');
  authorizeUrl.searchParams.set('client_id', clientId);
  authorizeUrl.searchParams.set('redirect_uri', `${origin}/api/callback`);
  authorizeUrl.searchParams.set('scope', 'repo');
  authorizeUrl.searchParams.set('state', state);

  const response = NextResponse.redirect(authorizeUrl);
  // Short-lived, httpOnly: only used to verify the callback wasn't forged.
  response.cookies.set('decap_oauth_state', state, {
    httpOnly: true,
    secure: true,
    sameSite: 'lax',
    maxAge: 600,
    path: '/',
  });
  return response;
}

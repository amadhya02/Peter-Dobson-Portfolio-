import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export const dynamic = 'force-dynamic';

export async function POST(request) {
  let body;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ success: false, message: 'Invalid request.' }, { status: 400 });
  }

  const { name, email, phone, goals, availability, contactMethod, company } = body || {};

  // Honeypot: a hidden field real visitors never fill in. Pretend success
  // so the bot doesn't learn anything, but never send the mail.
  if (company) {
    return NextResponse.json({ success: true });
  }

  if (!name || !email || !goals || !contactMethod) {
    return NextResponse.json({ success: false, message: 'Please complete all required fields.' }, { status: 400 });
  }

  const gmailUser = process.env.GMAIL_USER;
  const gmailPassword = process.env.GMAIL_APP_PASSWORD;
  if (!gmailUser || !gmailPassword) {
    return NextResponse.json({ success: false, message: 'The site is not yet configured to send email. Please email directly instead.' }, { status: 500 });
  }

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: { user: gmailUser, pass: gmailPassword },
  });

  try {
    await transporter.sendMail({
      from: `"Peter Dobson Fitness website" <${gmailUser}>`,
      to: gmailUser,
      replyTo: email,
      subject: `New intake request from ${name}`,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        `Phone: ${phone || '(not provided)'}`,
        `Preferred training times: ${availability || '(not provided)'}`,
        `Preferred contact method: ${contactMethod}`,
        '',
        'Goals:',
        goals,
      ].join('\n'),
    });
  } catch {
    return NextResponse.json({ success: false, message: 'Could not send your request right now. Please try again or email directly.' }, { status: 502 });
  }

  return NextResponse.json({ success: true });
}

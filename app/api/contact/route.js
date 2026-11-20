import { NextResponse } from 'next/server';

// Node.js API endpoint for the "Request an Inspection" form.
// Right now it validates the lead and logs it on the server.
// TODO: forward leads to email / SMS / CRM (e.g. Resend, SendGrid, Twilio, or a webhook).
export const runtime = 'nodejs';

const clean = (v, max = 500) => (typeof v === 'string' ? v.trim().slice(0, max) : '');

export async function POST(request) {
  let body;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: 'Invalid request.' }, { status: 400 });
  }

  // Honeypot: real visitors never fill this field.
  if (clean(body.company)) return NextResponse.json({ ok: true });

  const lead = {
    name: clean(body.name, 100),
    phone: clean(body.phone, 30),
    city: clean(body.city, 80),
    damage: clean(body.damage, 60),
    message: clean(body.message, 2000),
    receivedAt: new Date().toISOString(),
  };

  const digits = lead.phone.replace(/\D/g, '');
  if (!lead.name || digits.length < 10 || !lead.city) {
    return NextResponse.json({ error: 'Please enter your name, a valid phone number and your city.' }, { status: 400 });
  }

  console.log('[NEW LEAD]', JSON.stringify(lead));

  // Example webhook forwarding (set LEAD_WEBHOOK_URL in your hosting environment):
  if (process.env.LEAD_WEBHOOK_URL) {
    try {
      await fetch(process.env.LEAD_WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(lead),
      });
    } catch (err) {
      console.error('[LEAD WEBHOOK FAILED]', err);
    }
  }

  return NextResponse.json({ ok: true });
}

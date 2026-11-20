import { NextResponse } from 'next/server';

// Node.js API endpoint for the "Request an Inspection" form.
// Validates the lead, then sends it (with any photos) to Telegram.
//
// Environment variables (set them in .env.local and in your hosting dashboard):
//   TELEGRAM_BOT_TOKEN  — from @BotFather, e.g. 123456789:AAE...
//   TELEGRAM_CHAT_ID    — who gets the alerts. Comma-separate several IDs to notify more people/groups.
//   LEAD_WEBHOOK_URL    — optional extra webhook (Zapier/Make) that receives the lead as JSON.
export const runtime = 'nodejs';

const MAX_PHOTOS = 5;
const MAX_PHOTO_BYTES = 10 * 1024 * 1024; // Telegram's sendPhoto limit

const clean = (v, max = 500) => (typeof v === 'string' ? v.trim().slice(0, max) : '');
const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

export async function POST(request) {
  let form;
  try {
    form = await request.formData();
  } catch {
    return NextResponse.json({ error: 'Invalid request.' }, { status: 400 });
  }

  // Honeypot: real visitors never fill this field.
  if (clean(form.get('company'))) return NextResponse.json({ ok: true });

  const lead = {
    name: clean(form.get('name'), 100),
    phone: clean(form.get('phone'), 30),
    city: clean(form.get('city'), 80),
    damage: clean(form.get('damage'), 60),
    message: clean(form.get('message'), 2000),
    receivedAt: new Date().toISOString(),
  };

  const digits = lead.phone.replace(/\D/g, '');
  if (!lead.name || digits.length < 10 || !lead.city) {
    return NextResponse.json({ error: 'Please enter your name, a valid phone number and your city.' }, { status: 400 });
  }

  const photos = form
    .getAll('photos')
    .filter((f) => typeof f === 'object' && f.size > 0 && f.type?.startsWith('image/'));
  if (photos.length > MAX_PHOTOS) {
    return NextResponse.json({ error: `Please attach no more than ${MAX_PHOTOS} photos.` }, { status: 400 });
  }
  if (photos.some((f) => f.size > MAX_PHOTO_BYTES)) {
    return NextResponse.json({ error: 'Each photo must be under 10 MB.' }, { status: 400 });
  }
  lead.photos = photos.length;

  console.log('[NEW LEAD]', JSON.stringify(lead));

  await Promise.all([notifyTelegram(lead, photos), forwardWebhook(lead)]);

  return NextResponse.json({ ok: true });
}

// ---------- Telegram ----------

function leadMessage(lead) {
  const telDigits = lead.phone.replace(/[^\d+]/g, '');
  const when = new Date(lead.receivedAt).toLocaleString('en-US', { timeZone: 'America/New_York', dateStyle: 'medium', timeStyle: 'short' });
  return [
    '🚨 <b>New inspection request</b>',
    '',
    `👤 <b>${esc(lead.name)}</b>`,
    `📞 <a href="tel:${esc(telDigits)}">${esc(lead.phone)}</a>`,
    `📍 ${esc(lead.city)}`,
    `💧 ${esc(lead.damage || '—')}`,
    lead.message ? `\n📝 ${esc(lead.message)}` : '',
    lead.photos ? `\n📷 ${lead.photos} photo${lead.photos > 1 ? 's' : ''} attached below` : '',
    `\n🕒 ${when} ET`,
  ]
    .filter(Boolean)
    .join('\n');
}

async function tg(token, method, body) {
  const res = await fetch(`https://api.telegram.org/bot${token}/${method}`, { method: 'POST', body });
  const json = await res.json().catch(() => ({}));
  if (!json.ok) throw new Error(`Telegram ${method} failed: ${json.description || res.status}`);
  return json;
}

async function notifyTelegram(lead, photos) {
  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatIds = (process.env.TELEGRAM_CHAT_ID || '').split(',').map((s) => s.trim()).filter(Boolean);
  if (!token || !chatIds.length) {
    console.warn('[TELEGRAM] TELEGRAM_BOT_TOKEN / TELEGRAM_CHAT_ID not set — lead was only logged.');
    return;
  }

  const text = leadMessage(lead);

  for (const chatId of chatIds) {
    try {
      const msg = new FormData();
      msg.append('chat_id', chatId);
      msg.append('text', text);
      msg.append('parse_mode', 'HTML');
      msg.append('link_preview_options', JSON.stringify({ is_disabled: true }));
      await tg(token, 'sendMessage', msg);

      if (photos.length === 1) {
        const p = new FormData();
        p.append('chat_id', chatId);
        p.append('photo', photos[0], photos[0].name || 'photo.jpg');
        p.append('caption', `📷 ${lead.name} — ${lead.city}`);
        await tg(token, 'sendPhoto', p);
      } else if (photos.length > 1) {
        const g = new FormData();
        g.append('chat_id', chatId);
        g.append(
          'media',
          JSON.stringify(
            photos.map((_, i) => ({
              type: 'photo',
              media: `attach://photo${i}`,
              ...(i === 0 ? { caption: `📷 ${lead.name} — ${lead.city}` } : {}),
            }))
          )
        );
        photos.forEach((f, i) => g.append(`photo${i}`, f, f.name || `photo${i}.jpg`));
        await tg(token, 'sendMediaGroup', g);
      }
    } catch (err) {
      // Don't fail the visitor's request — the lead is already in the server log.
      console.error('[TELEGRAM FAILED]', chatId, err.message, JSON.stringify(lead));
    }
  }
}

// ---------- Optional webhook ----------

async function forwardWebhook(lead) {
  if (!process.env.LEAD_WEBHOOK_URL) return;
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

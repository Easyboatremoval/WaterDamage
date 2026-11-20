// Finds the chat ID(s) your Telegram bot can message.
// 1. Open your bot in Telegram and press Start (or add it to a group and send a message there).
// 2. Run:  TELEGRAM_BOT_TOKEN=123:ABC node scripts/telegram-chat-id.mjs
const token = process.env.TELEGRAM_BOT_TOKEN || process.argv[2];
if (!token) {
  console.error('Usage: TELEGRAM_BOT_TOKEN=<token> node scripts/telegram-chat-id.mjs');
  process.exit(1);
}
const res = await fetch(`https://api.telegram.org/bot${token}/getUpdates`);
const json = await res.json();
if (!json.ok) {
  console.error('Telegram error:', json.description);
  process.exit(1);
}
const chats = new Map();
for (const u of json.result) {
  const c = (u.message || u.channel_post || u.my_chat_member)?.chat;
  if (c) chats.set(c.id, c.title || [c.first_name, c.last_name].filter(Boolean).join(' ') || c.username);
}
if (!chats.size) {
  console.log('No chats yet. Send /start to your bot in Telegram, then run this again.');
} else {
  for (const [id, name] of chats) console.log(`${name}: TELEGRAM_CHAT_ID=${id}`);
}

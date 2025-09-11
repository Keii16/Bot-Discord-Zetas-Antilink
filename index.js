require("dotenv").config();
const { Client, GatewayIntentBits, Partials, PermissionsBitField } = require("discord.js");

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent
  ],
  partials: [Partials.Channel]
});

// Daftar channel yang diizinkan kirim link (isi dengan ID channel kamu)
const whitelistChannels = [
  "1317791500544905281", // contoh ID channel
  "1317791500264017944"
];

client.once("ready", () => {
  console.log(`✅ Bot logged in as ${client.user.tag}`);
});

client.on("messageCreate", async (message) => {
  if (message.author.bot) return;

  // CMD !ping
  if (message.content === "!ping") {
    return message.reply("Pong 🏓");
  }

  // Anti-link (hanya admin atau whitelist channel yang boleh kirim link)
  const linkRegex = /(https?:\/\/[^\s]+)/gi;
  if (linkRegex.test(message.content)) {
    const isAdmin = message.member.permissions.has(PermissionsBitField.Flags.Administrator);
    const isWhitelistedChannel = whitelistChannels.includes(message.channel.id);

    if (!isAdmin && !isWhitelistedChannel) {
      await message.delete().catch(() => {});
      return message.channel.send(`${message.author}, ❌ hanya admin atau channel tertentu yang boleh kirim link!`);
    }
  }
});

client.login(process.env.DISCORD_TOKEN);

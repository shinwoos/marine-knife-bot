const { Client, GatewayIntentBits, Collection } = require("discord.js");
const { Guilds, GuildMessages, MessageContent } = GatewayIntentBits;
const { REST } = require("@discordjs/rest");
const { Routes } = require("discord-api-types/v9");
const client = new Client({
  intents: [Guilds, GuildMessages, MessageContent],
});
const {
  generateDependencyReport,
  joinVoiceChannel,
  getVoiceConnection,
} = require("@discordjs/voice");

client.login("token!");

client.once("ready", () => console.log(client.user.tag + "start!"));

client.on("messageCreate", (message) => {
  if (message.content === "$join") {
    const connection = joinVoiceChannel({
      channelId: message.member.voice.channelId,
      guildId: message.guild.id,
      adapterCreator: message.guild.voiceAdapterCreator,
    });
  } else if (message.content === "$out") {
    const connection = joinVoiceChannel({
      channelId: message.member.voice.channelId,
      guildId: message.guild.id,
      adapterCreator: message.guild.voiceAdapterCreator,
    }).destroy();
  }
});

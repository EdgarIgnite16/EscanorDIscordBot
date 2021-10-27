require('dotenv').config();
const TOKEN = process.env.token;
const Discord = require('discord.js');
const mongoose = require('./database/ConnectDB');
const { Client, Intents, Collection } = require('discord.js');
const client = new Client({
  // intents: 32767
  intents:
  [
    Intents.FLAGS.GUILDS,
    Intents.FLAGS.GUILD_BANS,
    Intents.FLAGS.GUILD_EMOJIS_AND_STICKERS,
    Intents.FLAGS.GUILD_INTEGRATIONS,
    Intents.FLAGS.GUILD_WEBHOOKS,
    Intents.FLAGS.GUILD_INVITES,
    Intents.FLAGS.GUILD_VOICE_STATES,
    Intents.FLAGS.GUILD_MESSAGES,
    Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
    Intents.FLAGS.GUILD_MESSAGE_TYPING,
    Intents.FLAGS.DIRECT_MESSAGES,
    Intents.FLAGS.DIRECT_MESSAGE_REACTIONS,
    Intents.FLAGS.DIRECT_MESSAGE_TYPING,
    // Intents.FLAGS.GUILD_MEMBERS,
    // Intents.FLAGS.GUILD_PRESENCES,
  ] 
});

module.exports = client
// some config suck
client.commands = new Collection();
client.cooldowns = new Collection();

['Commands', 'Commands_Slash', 'Events'].forEach((handler)=> {
  require(`./Handler/${handler}`)(client, Discord);
});

//login and connection MongooseDB
mongoose.init();
client.login(TOKEN);
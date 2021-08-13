const fs = require('fs');
const Discord = require('discord.js');
const client = new Discord.Client({ disableMentions: 'everyone' });
const { Player } = require('discord-player');
const mongoose = require('./database/ConnectDB');
require('dotenv').config();

client.player = new Player(client);
client.commands= new Discord.Collection();
client.events = new Discord.Collection();
client.config = require('./config/bot');
client.emotes = client.config.emojis;
client.filters = client.config.filters;

//commands 
fs.readdirSync('./commands').forEach(dirs => {
  const commands = fs.readdirSync(`./commands/${dirs}`).filter(files => files.endsWith('.js'));
  for (const file of commands) {
      const command = require(`./commands/${dirs}/${file}`);
      console.log(`Loading command ${file}`); // option
      client.commands.set(command.name.toLowerCase(), command);
  };
});

// default value
const events = fs.readdirSync('./events').filter(file => file.endsWith('.js'));
const player = fs.readdirSync('./player').filter(file => file.endsWith('.js'));
const trigger = fs.readdirSync('./trigger').filter(file => file.endsWith('.js'));

//trigger
for (const file of trigger) {
  console.log(`Loading discord.js trigger ${file}`);
  const trigger = require(`./trigger/${file}`);
  if (trigger.once) {
      client.once(trigger.name, (...args) => trigger.execute(...args, client));
  }else {
      client.on(trigger.name, (...args) => trigger.execute(...args, client));
  }
}

//event
for (const file of events) {
  console.log(`Loading discord.js event ${file}`);
  const event = require(`./events/${file}`);
  client.on(file.split(".")[0], event.bind(null, client));
};

//players music
for (const file of player) {
  console.log(`Loading discord-player event ${file}`);
  const event = require(`./player/${file}`);
  client.player.on(file.split(".")[0], event.bind(null, client));
};

//login
mongoose.init();
client.login(process.env.token);
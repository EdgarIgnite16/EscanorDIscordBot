const fs = require('fs');
const Discord = require('discord.js');
const client = new Discord.Client({ disableMentions: 'everyone' });

// connection MongooseDB
const mongoose = require('./database/ConnectDB');
require('dotenv').config();

// some config suck
client.commands= new Discord.Collection();
client.events = new Discord.Collection();

//commands 
fs.readdirSync('./commands').forEach(dirs => {
  const commands = fs.readdirSync(`./commands/${dirs}`).filter(files => files.endsWith('.js'));
  for (const file of commands) {
      const command = require(`./commands/${dirs}/${file}`);
      console.log(`Loading command ${file}`); // option
      client.commands.set(command.name.toLowerCase(), command);
  };
});

//event
const events = fs.readdirSync('./events').filter(file => file.endsWith('.js'));
for (const file of events) {
  console.log(`Loading discord.js event ${file}`);
  const event = require(`./events/${file}`);
  client.on(file.split(".")[0], event.bind(null, client));
};

//trigger
const trigger = fs.readdirSync('./trigger').filter(file => file.endsWith('.js'));
for (const file of trigger) {
  console.log(`Loading discord.js trigger ${file}`);
  const trigger = require(`./trigger/${file}`);
  if (trigger.once) {
      client.once(trigger.name, (...args) => trigger.execute(...args, client));
  }else {
      client.on(trigger.name, (...args) => trigger.execute(...args, client));
  }
}

//login
mongoose.init();
client.login(process.env.token);
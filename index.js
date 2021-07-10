const fs = require('fs');
const Discord = require('discord.js');
const client = new Discord.Client({ disableMentions: 'everyone' });
const { Player } = require('discord-player');
require('dotenv').config();

client.player = new Player(client);
client.commands= new Discord.Collection();
client.events = new Discord.Collection();
client.config = require('./config/bot');
client.emotes = client.config.emojis;
client.filters = client.config.filters;

const events = fs.readdirSync('./events').filter(file => file.endsWith('.js'));
const player = fs.readdirSync('./player').filter(file => file.endsWith('.js'));

// const { prefixs } = require('./config/config.json');
// const { token } = require('./config/config.json')

let prefixs = process.env.prefix ; 

//commands 
fs.readdirSync('./commands').forEach(dirs => {
  const commands = fs.readdirSync(`./commands/${dirs}`).filter(files => files.endsWith('.js'));
  for (const file of commands) {
      const command = require(`./commands/${dirs}/${file}`);
      console.log(`Loading command ${file}`);
      client.commands.set(command.name.toLowerCase(), command);
  };
});


//event
for (const file of events) {
  console.log(`Loading discord.js event ${file}`);
  const event = require(`./events/${file}`);
  if (event.once) {
      client.once(event.name, (...args) => event.execute(...args, client));
  }else {
      client.on(event.name, (...args) => event.execute(...args, client));
  }
}

//players music
for (const file of player) {
  console.log(`Loading discord-player event ${file}`);
  const event = require(`./player/${file}`);
  client.player.on(file.split(".")[0], event.bind(null, client));
};


//started bot
client.on("message", async message => {
  if(message.author.bot) return;
  if(message.content.toLowerCase().startsWith(prefixs)) {
      const args = message.content.slice(prefixs.length).trim().split(/ +/g);
      const command = args.shift().toLowerCase();
      if(!client.commands.has(command)) return;
      try {
          client.commands.get(command).run(client, message, args);
      } catch (error){
          console.error(error);
      }
  }
})

//token
// client.login(token);
client.login(process.env.token);
const Discord = require('discord.js');
const client = new Discord.Client();
const { readdirSync } = require('fs');
const { join } = require('path');


const { token , Prefix , Reaction} = require('./config.json');
const  config = require('./config.json');

let prefix = (config.Prefix);
client.commands= new Discord.Collection();
client.events = new Discord.Collection();

const commandFiles = readdirSync(join(__dirname, "commands")).filter(file => file.endsWith(".js"));
const eventFiles = readdirSync('./events/').filter(file => file.endsWith('.js'));

//commands 
for (const file of commandFiles) {
    const command = require(join(__dirname, "commands", `${file}`));
    client.commands.set(command.name, command);
}

//event
for (const file of eventFiles) {
  const event = require(`./events/${file}`);
  if (event.once) {
      client.once(event.name, (...args) => event.execute(...args, client));
  } else {
    client.on(event.name, (...args) => event.execute(...args, client));
  }
}

//started bot
client.on("message", async message => {
  if(message.author.bot) return;
  if(message.content.startsWith(prefix)) {
      const args = message.content.slice(prefix.length).trim().split(/ +/g);
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
client.login(config.token);




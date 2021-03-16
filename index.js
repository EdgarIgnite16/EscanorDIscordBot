const Discord = require('discord.js');
const client = new Discord.Client();
const { token , Prefix , SpamChannel } = require('./config.json');
const { readdirSync } = require('fs');
const { join } = require('path');

const config = require('./config.json');
let prefix = (config.Prefix);

client.commands= new Discord.Collection();
const commandFiles = readdirSync(join(__dirname, "commands")).filter(file => file.endsWith(".js"));

for (const file of commandFiles) {
    const command = require(join(__dirname, "commands", `${file}`));
    client.commands.set(command.name, command);
}

client.on("error", console.error);
client.on('ready', () => {
  console.log(`${client.user.username} ready to burn , My King !!!`);
  client.user.setActivity(`Using Power of The Sun`);
});

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

client.login(config.token);




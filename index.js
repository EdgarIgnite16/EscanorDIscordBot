const Discord = require('discord.js');
const { readdirSync } = require('fs');
const { join } = require('path');
const client = new Discord.Client();
const { token , Prefix , Reaction} = require('./config.json');
/*
const { ReactionRoleManager } = require('discord.js-collector'); 
const client = new Client();
const reactionRoleManager = new ReactionRoleManager(client, {
    //We create a reaction role manager that'll handle everything related to reaction roles
    storage: true, // Enable reaction role store in a Json file
    path: __dirname + '/roles.json', // Where will save the roles if store is enabled
    mongoDbLink: 'url mongoose link', // See here to see how setup mongoose: https://github.com/IDjinn/Discord.js-Collector/tree/dev/examples/reaction-role-manager/Note.md & https://medium.com/@LondonAppBrewery/how-to-download-install-mongodb-on-windows-4ee4b3493514
   });


const bot = new Discord.Client({ partials: ["MESSAGE" , "CHANNEL" ,"REACTION"]});
*/
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

/*
//reaction role
client.on('message', async (message) => {
    if (message.member.hasPermission("ADMINISTRATOR")){
    const client = message.client;
    const args = message.content.split(' ').slice(1);
    // Example
    // >createReactionRole @role :emoji: MessageId
    if (message.content.startsWith('e!ReactionRoles')) {
     const role = message.mentions.roles.first();
     if (!role)
      return message
       .reply('You need mention a role')
       .then((m) => m.delete({ timeout: 1_000 }));
   
     const emoji = args[1];
     if (!emoji)
      return message
       .reply('You need use a valid emoji.')
       .then((m) => m.delete({ timeout: 1_000 }));
   
     const msg = await message.channel.messages.fetch(args[2] || message.id);
     if (!role)
      return message
       .reply('Message not found!')
       .then((m) => m.delete({ timeout: 1_000 }));
   
     reactionRoleManager.addRole({
      message: msg,
      role,
      emoji,
     });
     message.reply('Done').then((m) => m.delete({ timeout: 500 }));
    }
    }
   });
*/
//token
client.login(config.token);




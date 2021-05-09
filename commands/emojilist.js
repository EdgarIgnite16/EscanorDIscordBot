const discord = require('discord.js');

module.exports = {
 name: 'emoji-list',
 description: "Gets a guild's emojis",

 async run(client, message, args) {
  const charactersPerMessage = 2000;
  const emojis = message.guild.emojis.cache
 .map((e) => `${e} **-** \`:${e.name}:\``)
 .join(', ');
  const numberOfMessages = Math.ceil(emojis.length / charactersPerMessage);
  const embed = new discord.MessageEmbed().setTitle(`Emoji List`);
  for (i = 0; i < numberOfMessages; i++) {
   message.channel.send(
    embed.setDescription(
     emojis.slice(i * charactersPerMessage, (i + 1) * charactersPerMessage)
    )
   );
  }
 },
};
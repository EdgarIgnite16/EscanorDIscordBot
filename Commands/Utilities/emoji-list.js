const { MessageEmbed } = require("discord.js");

module.exports = {
    name: 'emoji-list',
    aliases: ['emo-list'],
    category: 'Utilities',
    utilisation: '{prefix}emoji-list , {prefix}e-list',
    description: "Call List of Emoji in server",
    execute(message, args, commandName, client, Discord) {
        const charactersPerMessage = 2000;
        const emojis = message.guild.emojis.cache.map((e) => `${e} **-** \`:${e.name}:\``).join(', ');
        const numberOfMessages = Math.ceil(emojis.length / charactersPerMessage);
        const embed = new MessageEmbed()
        .setTitle(`Emoji List`)
        .setColor('RANDOM');
        for (var i=0;i<numberOfMessages;i++) {
            message.channel.send({embeds: [
                embed.setDescription(
                    emojis.slice(i * charactersPerMessage, (i + 1) * charactersPerMessage)
                )
            ]});
        }
    },
};
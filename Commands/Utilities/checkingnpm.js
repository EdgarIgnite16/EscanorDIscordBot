const { MessageEmbed } = require('discord.js');
const { stripIndents } = require("common-tags");
module.exports = {
    name: 'checkingnpm',
    aliases: ['check_npm', 'npm_ver'],
    category: 'Utilities',
    utilisation: '{prefix}check_npm, {prefix}npm_ver',
    description: "Check Version Discord.js",
    cooldown: 5,
    execute(message, args, commandName, client, Discord) {
        let checking = new MessageEmbed()
        .setColor("RANDOM")
        .setDescription(stripIndents `**Version Discord.js**
            From package.json: **${require("discord.js/package.json").version}**
            From discord.js: **${require("discord.js").version}**
            `)
        message.channel.send({embeds: [checking]})
    }
}
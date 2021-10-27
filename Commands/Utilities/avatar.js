const { MessageEmbed } = require('discord.js')

module.exports = {
    name: 'avatar',
    aliases: [],
    category: 'Utilities',
    utilisation: '{prefix}avatar <username(Option)>',
    description: "get your face or get someone face",
    execute(message, args, commandName, client, Discord) {
        let member = message.mentions.users.first() || message.author
        const embed = new MessageEmbed()
            .setTitle(`${member.username}'s avatar`)
            .setURL(member.displayAvatarURL())
            .setImage(member.displayAvatarURL({
                dynamic: true,
                size: 4096
            }))
            .setColor("RANDOM")
            .setFooter(`${member.username}`, message.author.displayAvatarURL({ dynamic: true }))
            .setTimestamp()
        message.reply({embeds: [embed]});
    }
}
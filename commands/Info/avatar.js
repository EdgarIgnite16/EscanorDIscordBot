const Discord = require('discord.js');

module.exports = {
    name: 'avatar',
    aliases: [],
    category: 'Info',
    utilisation: '{prefix}avatar <username(Option)>',
    description: "get your face or get someone face",
    async run(client, message, args) {
        if (message.channel.type === 'dm') return;
        let member = message.mentions.users.first() || message.author
        const embed = new Discord.MessageEmbed()
            .setTitle(`${member.username}'s avatar`)
            .setURL(member.displayAvatarURL())
            .setImage(member.displayAvatarURL({
                dynamic: true,
                size: 4096
            }))
            .setColor("#27e2e8")
            .setTimestamp()
        message.channel.send(embed);
    }
}
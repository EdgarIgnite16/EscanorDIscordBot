const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'server-info',
    aliases: ['sv-info'],
    category: 'Utilities',
    utilisation: '{prefix}server-info <nameserver>, {prefix}sv-info <nameserver>',
    description: "server infomation",
    execute(message, args, commandName, client, Discord) {
        let embed = new MessageEmbed()
            .setThumbnail(message.guild.iconURL())
            .setTitle("Server Info Commands")
            .setColor("#8de815")
            .addField("** Name Server:**", `${message.guild.name}`, true)
            .addField("** Owner Server:**", `${message.guild.owner}`, true)
            .addField("** Created At **", `${message.guild.createdAt}`, true)
            .addField("** Location:**", `${message.guild.region}`, true)
            .addField("** Level Boost: ** ", `${message.guild.premiumTier}`, true)
            .addField("** Number Of Boost: **", `${message.guild.premiumSubscriptionCount}`, true)
            .addField("** Emoji Count: **", `${message.guild.emojis.cache.size}`, true)
            .addField("** Roles Count: **", `${message.guild.roles.cache.size}`, true)
            .addField("** Member Count: **", `${message.guild.memberCount}`, true)
            .addField("** MFA Level of Server: **", `${message.guild.mfaLevel}`, true)
            .setTimestamp()
        message.channel.send({embeds: [embed]})
    }
}
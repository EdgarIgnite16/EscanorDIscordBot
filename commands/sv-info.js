const Discord = require('discord.js');
const { stripIndents } = require("common-tags");
module.exports = {
    name: "sv-info",
    desciption: "Find Your Sever Info by command",

    async run (message,client,args) {
        message.delete();
        let embed = new Discord.MessageEmbed()
            .setThumbnail(message.guild.iconURL())
            .setTitle("Server Info Commands")
            .setColor("#8de815")
            
            .addField("** Name Server:**",`${message.guild.name}`,true)
            .addField("** Owner Server:**",`${message.guild.owner}`,true)
            .addField("** Created At **",`${message.guild.createdAt}`,true)
            .addField("** Location:**",`${message.guild.region}`,true)
            .addField("** Level Boost: ** ",`${message.guild.premiumTier}`,true)
            .addField("** Number Of Boost: **",`${message.guild.premiumSubscriptionCount}`,true)
            .addField("** Emoji Count: **",`${message.guild.emojis.cache.size}`,true)
            .addField("** Roles Count: **",`${message.guild.roles.cache.size}`,true)
            .addField("** Member Count: **",`${message.guild.memberCount}`,true)
            .addField("** MFA Level of Server: **",`${message.guild.mfaLevel}`,true)

            .setFooter("User Call Bot: " + message.author.username)
            .setTimestamp()
        message.channel.send(embed)

    }
}
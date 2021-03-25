const Discord = require('discord.js');
const { stripIndents } = require("common-tags");
module.exports = {
    name: "svinfo",
    desciption: "Find Your Sever Info by command",

    async run (client, message, args) {

        let embed = new Discord.MessageEmbed()
            
            .setColor("#8de815")
            .setThumbnail(message.guild.iconURL())
            .addField("Server Info", stripIndents`
            **- Your Name: ** ${message.author.username}
            **- Name Sever: ** ${message.guild.name}
            **- Owner Server :** ${message.guild.owner}
            **- Location: ** ${message.guild.region}
            ---------------------------------------------
            **- MFA Level: ** ${message.guild.mfaLevel}
            **- Member Count: ** ${message.guild.memberCount}/${message.guild.maximumMembers}
            **- Roles Count:** ${message.guild.roles.cache.size} roles
            **- Tier Boots: ** ${message.guild.premiumTier}
            **- Number of Boosts: ** ${message.guild.premiumSubscriptionCount}
            ---------------------------------------------
            **- AFK channel: ** ${message.guild.afkChannel}
            **- AFK Timeout: ** ${message.guild.afkTimeout}
            ---------------------------------------------
            **- Created At ** \nCreated at ${message.guild.createdAt.toDateString()}      
            **- Joined At **\nJoin at ${message.guild.joinedAt.toDateString()}
            `)

            .setFooter('Sever Info Command By Escanor')
            .setTimestamp()
        message.channel.send(embed)

    }
}
const Discord = require('discord.js');
const { stripIndents } = require("common-tags");
module.exports = {
    name: "svinfo",
    desciption: "Find Your Sever Info by command",

    async run (client, message) {

        let embed = new Discord.MessageEmbed()
            .setThumbnail(message.guild.iconURL())
            .setColor("#8de815")
            .addField("Server Info", stripIndents`
            **- Name Sever: ** ${message.guild.name}
            **- Owner Server : ** ${message.guild.owner.user.tag}
            **- Location: ** ${message.guild.region}
            ---------------------------------------------
            **- Tier Boots: ** ${message.guild.premiumTier}
            **- Number of Boosts: ** ${message.guild.premiumSubscriptionCount}
            **- Member Count: ** ${message.guild.memberCount} members
            **- Roles Count: ** ${message.guild.roles.cache.size} roles
            **- Emoji Count: ** ${message.guild.emojis.cache.size}
            **- MFA Level of Server : ** ${message.guild.mfaLevel}
            ---------------------------------------------
            **- Created At ** \nCreated at ${message.guild.createdAt.toDateString()}      
            **- Joined At **\nJoin at ${message.guild.joinedAt.toDateString()}
            `)
            
            
            .setFooter(client.user.username, client.user.avatarURL)
            .setTimestamp()
        message.channel.send(embed)

    }
}
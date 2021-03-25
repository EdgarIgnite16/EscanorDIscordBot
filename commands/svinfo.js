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
            **- Owner Server : ** ${message.guild.owner}
            **- Location: ** ${message.guild.region}

            ---------------------------------------------

            **- Tier Boost: ** ${message.guild.premiumTier}
            **- Number of Boost: ** ${message.guild.premiumSubscriptionCount}
            **- Member Count: ** ${message.guild.memberCount} members
            **- Roles Count: ** ${message.guild.roles.cache.size} roles
            **- Emoji Count: ** ${message.guild.emojis.cache.size}
            **- MFA Level of Server : ** ${message.guild.mfaLevel}

            ---------------------------------------------
            
            **- Created At ** \nCreated at ${message.guild.createdAt.toDateString()}      
            **- Joined At **\nJoin at ${message.guild.joinedAt.toDateString()}
            `)
            
            
            .setFooter("User Call Bot: " + message.author.username)
            .setTimestamp()
        message.channel.send(embed)

    }
}
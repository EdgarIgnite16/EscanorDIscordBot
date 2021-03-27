const Discord = require('discord.js')
const { stripIndents } = require("common-tags")
module.exports = {
    name: "help",
    desciption: "help commands",

    async run (client, message) {
        let embed = new Discord.MessageEmbed()
            .setThumbnail(message.guild.iconURL())
            .setTitle("Help Commands !")
            .setDescription("**Nhập Prefix `e!``+``<Lệnh>`` để sử dụng **")
            .setColor("#8de815")
            .addField("🔐 Moderator:"," `svinfo` | `user-info` | `ban` | `kick` ")
            .addField("🧾 Feature:"," `avatar` | `say` | `dms` | `cfs` | `weather` | `clear` | `ping` ")
            .addField("🎆 Fun:"," `8ball` | `iq` | `meme` | `slap` | `kiss` | `hug` | `baka` ")
            .addField("⛔ NSFW:"," `ass` | `anal` | `blowjob` | `boobs` | `cum` | `ero` | `erofeet` | `foxgirl` ")
            .addField("🐾Animal:"," `cat` | `dog` ")
            .setFooter("User Call Bot: " + message.author.username)
            .setTimestamp()
        message.channel.send(embed)

    }
}
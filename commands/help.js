const Discord = require('discord.js')
const { stripIndents } = require("common-tags")
module.exports = {
    name: "help",
    desciption: "help commands",

    async run (client, message) {
        let embed = new Discord.MessageEmbed()
            .setThumbnail(message.guild.iconURL())
            .setTitle("Help Commands!")
            .setDescription("**Type Prefix `e!` + `<command>` to use Commands**")
            .setColor("#8de815")
            .addField("🔐 Moderator:","`sv-info`,`user-info`,`clear`,`ban`,`kick`,`tempmute`,`MLTC`")
            .addField("🧾 Feature:","`chat`,`avatar`,`search`,`cfs`,`weather`,`ping`,`math`,`dms`,`say`,`emoji`,`emoji-list`,`feedback`")
            .addField("🎆 Fun:","`8ball`,`iq`,`meme`,`slap`,`kiss`,`hug`,`baka`,`cat`,`dog`")
            .addField("⛔ NSFW:","`ass`,`anal`,`blowjob`,`boobs`,`cum`,`ero`,`erofeet`,`foxgirl`")
            .setFooter("User Call Bot: " + message.author.username)
            .setTimestamp()
        message.channel.send(embed)

    }
}
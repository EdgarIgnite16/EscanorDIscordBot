const Discord = require('discord.js')

module.exports = {
    name: "help",
    desciption: "help commands",

    async run (client, message) {
        let embed = new Discord.MessageEmbed()
            .setThumbnail(message.guild.iconURL())
            .setTitle("Help Commands!")
            .setDescription("**Type Prefix `e!` + `<command>` to use Commands**" + "\n" + "**Type `e!` + `developer` to see bot creator info 👋**")
            .setColor("#8de815")
            .addField("🐶 Animal: ","`cat` `dog`")
            .addField("🔐 Moderator:","`sv-info` `user-info` `clear` `ban` `kick` `tempmute`")
            .addField("🧾 Feature:","`chat` `avatar` `search` `cfs` `weather` `ping` `math` `dms` `say` `emoji` `emoji-list` `feedback`")
            .addField("🎆 Fun:","`8ball` `iq` `meme` `slap` `kiss` `hug` `baka` `gay`")
            .addField("⛔ NSFW:","`ass` `anal` `blowjob` `boobs` `cum` `ero` `erofeet` `foxgirl`")
            .setFooter("User use commands " + message.author.username)
            .setTimestamp()
        message.channel.send(embed)

    }
}
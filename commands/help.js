const Discord = require('discord.js')

module.exports = {
    name: "help",
    desciption: "help commands",

    async run (client, message) {
        let embed = new Discord.MessageEmbed()

            .setTitle("Help Commands!")
            .setDescription("**Type Prefix `e!` + `<command>` to use Commands**" + "\n" + "**Type `e!` + `developer` to see bot creator info 👋**")
            .setColor("#8de815")
            .addField("🐶 Animal: ","`cat` `dog`")
            .addField("🔐 Moderator:","`sv-info` `user-info` `clear` `ban` `kick` `tempmute` `poll` ")
            .addField("🧾 Feature:","`chat` `avatar` `search` `cfs` `weather` `ping` `math` `dms` `say` `emoji` `emoji-list` `feedback`")
            .addField("🎆 Fun:","`8ball` `iq` `meme` `slap` `kiss` `hug` `baka` `gay`")
            .addField("⛔ NSFW:","`ass` `anal` `blowjob` `boobs` `cum` `ero` `erofeet` `foxgirl`")
            .setTimestamp()
        message.channel.send(embed)

    }
}
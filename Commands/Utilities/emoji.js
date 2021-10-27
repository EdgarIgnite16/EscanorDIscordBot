const { MessageEmbed } = require("discord.js");
const { parse } = require('twemoji-parser');
module.exports = {
    name: 'emoji',
    aliases: [],
    category: 'Utilities',
    utilisation: '{prefix}emoji <emoji name>',
    description: "Call Emoji",
    execute(message, args, commandName, client, Discord) {
        const emoji = args[0];
        if (!emoji) {
            const errorValue = new MessageEmbed()
            .setColor("RED")
            .setDescription("Vui lòng nhập emoji !")
            return message.channel.send({embeds: [errorValue]})
            .then((sent) => {
                setTimeout(() => {
                    sent.delete();
                }, 5000);
            });
        }
        let custom = Discord.Util.parseEmoji(emoji);
        const embedEmoji = new MessageEmbed()
            .setTitle(`Your emoji : ${emoji}`)
            .setColor("RANDOM");

        if (custom.id) {
            let link = `https://cdn.discordapp.com/emojis/${custom.id}.${custom.animated ? "gif" : "png"}`
            embedEmoji.setImage(link).setFooter(`Emoji ID: ${custom.id}`).setURL(link)
            return message.channel.send({embeds: [embedEmoji]});
        } else {
            let parsed = parse(emoji, { assetType: `png` });
            if (!parsed[0]) {
                const embedEmojiError = new MessageEmbed()
                .setColor("RED")
                .setDescription("Can't find Emoji!")
                message.channel.send({embeds: [embedEmojiError]})
            }
            embedEmoji.setImage(parsed[0].url);
            return message.channel.send({embeds: [embedEmoji]});
        }

    }
}
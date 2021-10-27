const superagent = require("superagent");
const { MessageEmbed } = require('discord.js')

module.exports = {
    name: 'keta',
    aliases: [],
    category: 'NSFW',
    utilisation: '{prefix}keta',
    description: "Display a random keta image/gif",
    execute(message, args, commandName, client, Discord) {
        if (!message.channel.nsfw) {
            message.react('💢');
            const CantSend = new MessageEmbed()
            .setColor("RED")
            .setDescription("Bạn không thể dùng lệnh này trong kênh thông thường\nLệnh này chỉ được sử dụng trong kênh **NSFW** !")
            return message.channel.send({embeds: [CantSend]})
        }
        superagent.get('https://nekos.life/api/v2/img/keta')
            .end((err, response) => {
                const sendNSFW = new MessageEmbed()
                    .setTitle(":smirk: keta")
                    .setImage(response.body.url)
                    .setColor(`RANDOM`)
                    .setFooter(`Tags: keta `)
                    .setURL(response.body.url);
                message.channel.send({embeds: [sendNSFW]});
            })

    }
}

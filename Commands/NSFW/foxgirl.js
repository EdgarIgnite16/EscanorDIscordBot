const superagent = require("superagent");
const { MessageEmbed } = require('discord.js')

module.exports = {
    name: 'foxgirl',
    aliases: [],
    category: 'NSFW',
    utilisation: '{prefix}foxgirl',
    description: "Display a random fox girl image/gif",
    execute(message, args, commandName, client, Discord) {
        if (!message.channel.nsfw) {
            message.react('💢');
            const CantSend = new MessageEmbed()
            .setColor("RED")
            .setDescription("Bạn không thể dùng lệnh này trong kênh thông thường\nLệnh này chỉ được sử dụng trong kênh **NSFW** !")
            return message.channel.send({embeds: [CantSend]})
        }
        superagent.get('https://nekos.life/api/v2/img/fox_girl')
            .end((err, response) => {
                const sendNSFW = new MessageEmbed()
                    .setTitle("Fox girl Woof")
                    .setImage(response.body.url)
                    .setColor(`RANDOM`)
                    .setFooter(`Tags: fox girl `)
                    .setURL(response.body.url);
                message.channel.send({embeds: [sendNSFW]});
            })

    }
}
const superagent = require("superagent");
const { MessageEmbed } = require('discord.js')

module.exports = {
    name: 'hentai',
    aliases: [],
    category: 'NSFW',
    utilisation: '{prefix}hentai',
    description: "Display a random hentai image/gif",
    execute(message, args, commandName, client, Discord) {
        if (!message.channel.nsfw) {
            message.react('💢');
            const CantSend = new MessageEmbed()
            .setColor("RED")
            .setDescription("Bạn không thể dùng lệnh này trong kênh thông thường\nLệnh này chỉ được sử dụng trong kênh **NSFW** !")
            return message.channel.send({embeds: [CantSend]})
        }
        superagent.get('https://nekos.life/api/v2/img/hentai')
            .end((err, response) => {
                const sendNSFW = new MessageEmbed()
                    .setTitle(":smirk: hentai")
                    .setImage(response.body.url)
                    .setColor(`RANDOM`)
                    .setFooter(`Tags: hentai `)
                    .setURL(response.body.url);
                message.channel.send({embeds: [sendNSFW]});
            })

    }
}

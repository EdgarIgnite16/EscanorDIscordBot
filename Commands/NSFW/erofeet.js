const superagent = require("superagent");
const { MessageEmbed } = require('discord.js')

module.exports = {
    name: 'erofeet',
    aliases: [],
    category: 'NSFW',
    utilisation: '{prefix}erofeet',
    description: "Display a random erofeet image/gif",
    execute(message, args, commandName, client, Discord) {
        if (!message.channel.nsfw) {
            message.react('💢');
            const CantSend = new MessageEmbed()
            .setColor("RED")
            .setDescription("Bạn không thể dùng lệnh này trong kênh thông thường\nLệnh này chỉ được sử dụng trong kênh **NSFW** !")
            return message.channel.send({embeds: [CantSend]})
        }
        superagent.get('https://nekos.life/api/v2/img/erofeet')
            .end((err, response) => {
                const sendNSFW = new MessageEmbed()
                    .setTitle("Wanna this Erofeet")
                    .setImage(response.body.url)
                    .setColor(`RANDOM`)
                    .setFooter(`Tags: erofeet `)
                    .setURL(response.body.url);
                message.channel.send({embeds: [sendNSFW]});
            })
    }
}
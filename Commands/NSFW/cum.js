const superagent = require("superagent");
const { MessageEmbed } = require('discord.js')
module.exports = {
    name: 'cum',
    aliases: [],
    category: 'NSFW',
    utilisation: '{prefix}cum',
    description: "Display a random cum image/gif",
    execute(message, args, commandName, client, Discord) {
        if (!message.channel.nsfw) {
            message.react('💢');
            const CantSend = new MessageEmbed()
            .setColor("RED")
            .setDescription("Bạn không thể dùng lệnh này trong kênh thông thường\nLệnh này chỉ được sử dụng trong kênh **NSFW** !")
            return message.channel.send({embeds: [CantSend]})
        }
        superagent.get('https://nekos.life/api/v2/img/cum')
            .end((err, response) => {
                const sendNSFW = new MessageEmbed()
                    .setTitle("You want this ? Cum ? Okay")
                    .setImage(response.body.url)
                    .setColor(`RANDOM`)
                    .setFooter(`Tags: cum `)
                    .setURL(response.body.url);
                message.channel.send({embeds: [sendNSFW]});
            })

    }
}
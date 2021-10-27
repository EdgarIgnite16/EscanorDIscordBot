const superagent = require("superagent");
const { MessageEmbed } = require('discord.js')

module.exports = {
    name: 'holo',
    aliases: [],
    category: 'Funny',
    utilisation: '{prefix}holo',
    description: "Display a random holo image/gif",
    execute(message, args, commandName, client, Discord) {
        superagent.get('https://nekos.life/api/v2/img/holo')
            .end((err, response) => {
                const sendNSFW = new MessageEmbed()
                    .setTitle(":smile: holo")
                    .setImage(response.body.url)
                    .setColor(`RANDOM`)
                    .setFooter(`Tags: holo `)
                    .setURL(response.body.url);
                message.channel.send({embeds: [sendNSFW]});
            })
    }
}

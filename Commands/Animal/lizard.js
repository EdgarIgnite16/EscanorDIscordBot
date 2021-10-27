const { MessageEmbed } = require("discord.js");
const superagent = require('superagent');
module.exports = {
    name: 'lizard',
    aliases: [],
    category: 'Animal',
    utilisation: '{prefix}lizard',
    description: 'Summoner a lizard',
    execute(message, args, commandName, client, Discord) {
        superagent.get('https://nekos.life/api/v2/img/lizard').end((err, response) => {
            const embed = new MessageEmbed()
                .setTitle("Random lizard")
                .setImage(response.body.url)
                .setColor(`RANDOM`)
                .setFooter(`lizardddddddddd`)
                .setURL(response.body.url);
            message.channel.send({embeds: [embed]});
        })
    }
}
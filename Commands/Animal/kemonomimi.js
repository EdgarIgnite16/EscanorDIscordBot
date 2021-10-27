const { MessageEmbed } = require("discord.js");
const superagent = require('superagent');
module.exports = {
    name: 'kemonomimi',
    aliases: ['kemono'],
    category: 'Animal',
    utilisation: '{prefix}goose',
    description: 'Summoner a kemonomimi',
    execute(message, args, commandName, client, Discord) {
        superagent.get('https://nekos.life/api/v2/img/kemonomimi').end((err, response) => {
            const embed = new MessageEmbed()
                .setTitle("Random kemonomimi")
                .setImage(response.body.url)
                .setColor(`RANDOM`)
                .setFooter(`:3`)
                .setURL(response.body.url);
            message.channel.send({embeds: [embed]});
        })
    }
}
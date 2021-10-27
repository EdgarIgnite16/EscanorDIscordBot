const { MessageEmbed } = require("discord.js");
const superagent = require('superagent');
module.exports = {
    name: 'goose',
    aliases: [],
    category: 'Animal',
    utilisation: '{prefix}goose',
    description: 'Summoner a goose',
    execute(message, args, commandName, client, Discord) {
        superagent.get('https://nekos.life/api/v2/img/goose').end((err, response) => {
            const embed = new MessageEmbed()
                .setTitle("Random goose")
                .setImage(response.body.url)
                .setColor(`RANDOM`)
                .setFooter(`quack quack`)
                .setURL(response.body.url);
            message.channel.send({embeds: [embed]});
        })
    }
}
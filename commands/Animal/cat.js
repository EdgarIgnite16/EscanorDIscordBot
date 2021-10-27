const { MessageEmbed } = require("discord.js");
const superagent = require('superagent');
module.exports = {
    name: 'cat',
    aliases: [],
    category: 'Animal',
    utilisation: '{prefix}cat',
    description: 'Summoner a Cat',
    execute(message, args, commandName, client, Discord) {
        superagent.get('https://nekos.life/api/v2/img/meow').end((err, response) => {
            const embed = new MessageEmbed()
                .setTitle("Random cat")
                .setImage(response.body.url)
                .setColor(`RANDOM`)
                .setFooter(`meow`)
                .setURL(response.body.url);
            message.channel.send({embeds: [embed]});
        })
    }
}
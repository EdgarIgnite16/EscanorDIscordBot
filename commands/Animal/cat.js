const Discord = require('discord.js');
const superagent = require('superagent');
module.exports = {
    name: 'cat',
    aliases: [],
    category: 'Animal',
    utilisation: '{prefix}cat',
    description: 'Summoner a Cat',
    async run(client, message, args) {
        superagent.get('https://nekos.life/api/v2/img/meow').end((err, response) => {
                const embed = new Discord.MessageEmbed()
                    .setTitle("Random cat")
                    .setImage(response.body.url)
                    .setColor(`RANDOM`)
                    .setFooter(`meow`)
                    .setURL(response.body.url);
                message.channel.send(embed);
            })


    }
}
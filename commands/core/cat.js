const Discord = require('discord.js');
const superagent = require('superagent');
module.exports = {
    
    name: 'cat',
    aliases: [],
    category: 'pet',
    utilisation: '{prefix}pet',

    execute(client, message, args) {
        message.delete();
        superagent.get('https://nekos.life/api/v2/img/meow')
            .end((err, response) => {
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
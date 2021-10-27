const { MessageEmbed } = require("discord.js");
const superagent = require('superagent');
module.exports = {
    name: 'dog',
    aliases: [],
    category: 'Animal',
    utilisation: '{prefix}dog',
    description: 'Summoner a dog',
    execute(message, args, commandName, client, Discord) {
        superagent.get('https://nekos.life/api/v2/img/woof').end((err, response) => {
            const embed = new MessageEmbed()
                .setTitle("Random dog")
                .setImage(response.body.url)
                .setColor(`RANDOM`)
                .setFooter(`woof`)
                .setURL(response.body.url);
            message.channel.send({embeds: [embed]});
        })
    }
}
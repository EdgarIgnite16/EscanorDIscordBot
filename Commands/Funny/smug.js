const { MessageEmbed } = require("discord.js");
const superagent = require('superagent');
module.exports = {
    name: 'smug',
    aliases: [],
    category: 'Funny',
    utilisation: '{prefix}smug',
    description: 'Summoner a smug',
    execute(message, args, commandName, client, Discord) {
        superagent.get('https://nekos.life/api/v2/img/smug').end((err, response) => {
            const embed = new MessageEmbed()
                .setTitle("SUMG")
                .setImage(response.body.url)
                .setColor(`RANDOM`)
                .setFooter(`I am the best ! `)
                .setURL(response.body.url);
            message.channel.send({embeds: [embed]});
        })
    }
}
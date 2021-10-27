const { MessageEmbed } = require("discord.js");
const superagent = require('superagent');
module.exports = {
    name: 'neko',
    aliases: [],
    category: 'Fun',
    utilisation: '{prefix}neko',
    description: 'Summoner a neko',
    execute(message, args, commandName, client, Discord) {
        superagent.get('https://nekos.life/api/v2/img/neko').end((err, response) => {
            const embed = new MessageEmbed()
                .setTitle("neko neko niiiiiiiii")
                .setImage(response.body.url)
                .setColor(`RANDOM`)
                .setFooter(`meowwwwwww`)
                .setURL(response.body.url);
            message.channel.send({embeds: [embed]});
        })
    }
}
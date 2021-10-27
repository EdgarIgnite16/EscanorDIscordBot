const { MessageEmbed } = require("discord.js");
const superagent = require('superagent');
module.exports = {
    name: 'waifu',
    aliases: [],
    category: 'Funny',
    utilisation: '{prefix}waifu',
    description: 'Summoner a waifu',
    execute(message, args, commandName, client, Discord) {
        superagent.get('https://nekos.life/api/v2/img/waifu').end((err, response) => {
            const embed = new MessageEmbed()
                .setTitle("waifuu")
                .setImage(response.body.url)
                .setColor(`RANDOM`)
                .setFooter(`look good :>`)
                .setURL(response.body.url);
            message.channel.send({embeds: [embed]});
        })
    }
}
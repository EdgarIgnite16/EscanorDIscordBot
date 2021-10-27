const { MessageEmbed } = require("discord.js");
const superagent = require('superagent');
module.exports = {
    name: 'wallpaper',
    aliases: ['wp'],
    category: 'Funny',
    utilisation: '{prefix}nekoGif',
    description: 'Summoner a wallpaper',
    execute(message, args, commandName, client, Discord) {
        superagent.get('https://nekos.life/api/v2/img/wallpaper').end((err, response) => {
            const embed = new MessageEmbed()
                .setTitle("Random wallpaper")
                .setImage(response.body.url)
                .setColor(`RANDOM`)
                .setFooter(`u like it :3`)
                .setURL(response.body.url);
            message.channel.send({embeds: [embed]});
        })
    }
}
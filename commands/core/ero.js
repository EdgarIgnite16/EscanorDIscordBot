const superagent = require("superagent");
const Discord = require('discord.js');

module.exports = {

    name: 'ero',
    aliases: [],
    category: 'sex',
    utilisation: '{prefix}ero',

    execute( client , message , args ){
        if (!message.channel.nsfw) {
            message.react('💢');
            return message.channel.send({embed: {
                    color: 16734039,
                    description: "You can use this command in an NSFW Channel!"
                }})
        }
        superagent.get('https://nekos.life/api/v2/img/ero')
            .end((err, response) => {
          const embed = new Discord.MessageEmbed()
          .setTitle("Well Ero")
          .setImage(response.body.url)
          .setColor(`RANDOM`)
          .setFooter(`Tags: ero `)
          .setURL(response.body.url);
      message.channel.send(embed);
        })

    }
}
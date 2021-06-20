const superagent = require("superagent");
const Discord = require('discord.js');


module.exports = {
    
    name: 'fox-girl',
    aliases: ['fg'],
    category: 'sex',
    utilisation: '{prefix}for-girl',

    execute( client , message , args ){
        if (!message.channel.nsfw) {
            message.react('💢');
            return message.channel.send({embed: {
                    color: 16734039,
                    description: "You can use this command in an NSFW Channel!"
                }})
        }
        message.delete();
        superagent.get('https://nekos.life/api/v2/img/fox_girl')
            .end((err, response) => {
          const embed = new Discord.MessageEmbed()
          .setTitle("Fox girl Woof")
          .setImage(response.body.url)
          .setColor(`RANDOM`)
          .setFooter(`Tags: fox girl `)
          .setURL(response.body.url);
      message.channel.send(embed);
        })

    }
}
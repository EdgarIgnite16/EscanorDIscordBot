const superagent = require("superagent");
const Discord = require('discord.js')

module.exports = {

    name: 'blowjob',
    aliases: ['bjob'],
    category: 'sex',
    utilisation: '{prefix}blowjob',

    execute(client, message ,args){
        if (!message.channel.nsfw) {
            message.react('💢');
            return message.channel.send({embed: {
                    color: 16734039,
                    description: "You can use this command in an NSFW Channel!"
                }})
        }
        message.delete();
        superagent.get('https://nekos.life/api/v2/img/blowjob')
            .end((err, response) => {
          const embed = new Discord.MessageEmbed()
          .setTitle("Hehe this is Blowjob")
          .setImage(response.body.url)
          .setColor(`RANDOM`)
          .setFooter(`Tags: blowjob `)
          .setURL(response.body.url);
      message.channel.send(embed);
        })

    }
}

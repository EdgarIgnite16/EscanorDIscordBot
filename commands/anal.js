const superagent = require("superagent");
const Discord = require('discord.js')

module.exports = {
    name: "anal",
    description: "Display a random anal image/gif",
    async run( client, message ,args){
        if (!message.channel.nsfw) {
            message.react('💢');
            return message.channel.send({embed: {
                    color: 16734039,
                    description: "You can use this command in an NSFW Channel!"
                }})
        }
        superagent.get('https://nekos.life/api/v2/img/anal')
            .end((err, response) => {
          const embed = new Discord.MessageEmbed()
          .setTitle(":smirk: Anal")
          .setImage(response.body.url)
          .setColor(`RANDOM`)
          .setFooter(`Tags: anal ` + "- User Call Bot: " + message.author.username)
          .setURL(response.body.url);
      message.channel.send(embed);
        })
    }
}
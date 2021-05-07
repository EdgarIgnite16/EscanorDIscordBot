const superagent = require("superagent");
const Discord = require('discord.js')

module.exports = {
    name: "erofeet",
    description: "Display a random erofeet image/gif",
    async run(message){
        message.delete();
        if (!message.channel.nsfw) {
            message.react('💢');
            return message.channel.send({embed: {
                    color: 16734039,
                    description: "You can use this command in an NSFW Channel!"
                }})
        }
        superagent.get('https://nekos.life/api/v2/img/erofeet')
            .end((err, response) => {
          const embed = new Discord.MessageEmbed()
          .setTitle("Wanna this Erofeet")
          .setImage(response.body.url)
          .setColor(`RANDOM`)
          .setFooter(`Tags: erofeet ` + "- User Call Bot: " + message.author.username)
          .setURL(response.body.url);
      message.channel.send(embed);
        })
    }
}
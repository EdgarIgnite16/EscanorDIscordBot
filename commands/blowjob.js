const superagent = require("superagent");
const Discord = require('discord.js')

module.exports = {
    name: "blowjob",
    description: "Display a random blowjob image/gif",
    async run(message,client,args){
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
          .setFooter(`Tags: blowjob ` + "- User Call Bot: " + message.author.username)
          .setURL(response.body.url);
      message.channel.send(embed);
        })

    }
}

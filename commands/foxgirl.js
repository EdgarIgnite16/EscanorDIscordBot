const superagent = require("superagent");
const Discord = require('discord.js');
const { run } = require("./blowjob");

module.exports = {
    name: "foxgirl",
    description: "Display a random fox girl image/gif",

    async run(message,client,args){
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
          .setFooter(`Tags: fox girl ` + "- User Call Bot: " + message.author.username)
          .setURL(response.body.url);
      message.channel.send(embed);
        })

    }
}
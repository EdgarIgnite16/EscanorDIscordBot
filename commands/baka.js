const superagent = require("superagent");
const Discord = require('discord.js')

module.exports = {
    name: "baka",
    description: "BAKA!!!",
    async run( client , message , args ){
        message.delete();
        const user = message.mentions.users.first();
        superagent.get('https://nekos.life/api/v2/img/baka')
        .end((err, response) => {
      const embed = new Discord.MessageEmbed()
      .setTitle("BAKA!!! " + user.username)
      .setDescription("ばかやろう "+ user.toString())
      .setImage(response.body.url)
      .setColor(`RANDOM`)
      .setFooter(`idiot!` + "- User Call Bot: " + message.author.username)
      .setURL(response.body.url);
  message.channel.send(embed);
    })


    }
} 
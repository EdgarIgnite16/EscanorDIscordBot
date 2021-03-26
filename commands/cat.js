const superagent = require("superagent");
const Discord = require('discord.js')


module.exports = {
    name: "cat",
    description: "Sends a random cat photo",
    async run(client,message,args){
        superagent.get('https://nekos.life/api/v2/img/meow')
        .end((err, response) => {
      const embed = new Discord.MessageEmbed()
      .setTitle("Random cat")
      .setImage(response.body.url)
      .setColor(`RANDOM`)
      .setFooter(`meow meow` + "- User Call Bot: " + message.author.username)
      .setURL(response.body.url);
  message.channel.send(embed);
    })
    }
}
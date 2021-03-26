
const superagent = require('superagent');
const Discord = require('discord.js');

module.exports = {
    name: "dog",
    description: "Sends a random dog photo",
    async run(client,message,args){
        superagent.get('https://nekos.life/api/v2/img/woof')
        .end((err, response) => {
      const embed = new Discord.MessageEmbed()
      .setTitle("Random dog")
      .setImage(response.body.url)
      .setColor("RANDOM")
      .setFooter(`woof`)
      .setFooter(`woof` + "- User Call Bot: " + message.author.username)
  message.channel.send(embed);
    })
    }
}
const superagent = require('superagent');
const Discord = require('discord.js')

module.exports = {
  name: 'dog',
  aliases: [],
  category: 'Animal',
  utilisation: '{prefix}dog',
  description: "Summoner a Dog",
  async run(client, message, args) {
    superagent.get('https://nekos.life/api/v2/img/woof').end((err, response) => {
      const embed = new Discord.MessageEmbed()
        .setTitle("Random dog")
        .setImage(response.body.url)
        .setColor("RANDOM")
        .setFooter(`woof`)
        .setURL(response.body.url);
      message.channel.send(embed);
    })
  }
}
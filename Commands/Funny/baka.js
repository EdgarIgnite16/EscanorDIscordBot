const superagent = require("superagent");
const { MessageEmbed } = require('discord.js')

module.exports = {
name: 'baka',
aliases: [],
category: 'Funny',
utilisation: '{prefix}baka',
description: "Give a Baka to someone",
execute(message, args, commandName, client, Discord) {
    message.delete();
    const user = message.mentions.users.first();
    if (!user){
      const CantSend = new MessageEmbed()
        .setColor("RED")
        .setDescription("Bạn chưa nhập người để **BAKA** :)) ")
      return message.channel.send({embeds: [CantSend]})
    } else {
      superagent.get('https://nekos.life/api/v2/img/baka')
        .end((err, response) => {
          const embed = new MessageEmbed()
            .setTitle("BAKA!!!")
            .setDescription(`ばかやろう ~~> ${user.username}`)
            .setImage(response.body.url)
            .setColor(`RANDOM`)
            .setFooter(`idiot!`)
            .setURL(response.body.url);
          message.channel.send({embeds: [embed]});
        })
    }
  }
}
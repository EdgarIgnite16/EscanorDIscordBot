const Discord = require('discord.js');
const superagent = require('superagent');

module.exports = {
    name: 'hug',
    aliases: [],
    category: 'Fun',
    utilisation: '{prefix}hug <username>',
    description: "Hug someone",
    async run (client , message ,args){
        const user = message.mentions.users.first();
            if(!user)
                return message.channel.send({embed: {
                color: 16734039,
                description: "You must mention someone to give hug!"
            }})
		if (message.author === user) {
           return await message.channel.send({embed: {
                color: 16734039,
                description: "You cant hug yourself!"
            }}).then((sent) => {
                setTimeout(() => {
                    sent.delete();
                }, 5000);
            });
		}
            superagent.get('https://nekos.life/api/v2/img/hug')
                .end((err, response) => {
              const embed = new Discord.MessageEmbed()
              .setTitle(user.username + " Just got a hug from " + message.author.username)
              .setImage(response.body.url)
              .setColor("RANDOM")
              .setDescription((user.toString() + " got a hug from " + message.author.toString()))
              .setFooter(`this is so cute `)
              .setURL(response.body.url);
          message.channel.send(embed);
            })

    }
}
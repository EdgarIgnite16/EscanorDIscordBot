const superagent = require('superagent');
const Discord = require('discord.js')


module.exports = {
    name: "kiss",
    description: "kiss someone ",
    async run(client,message,args){
        
        const user = message.mentions.users.first();
        message.delete();
        if(!user)
            return message.channel.send({embed: {
            color: 16734039,
            description: "You must mention someone to kiss!"
        }})

    if (message.author === user) {
       return await message.channel.send({embed: {
            color: 16734039,
            description: "You cant kiss yourself!"
        }}).then((sent) => {
            setTimeout(() => {
                sent.delete();
            }, 5000);
        });
    }
        superagent.get('https://nekos.life/api/v2/img/kiss')
            .end((err, response) => {
          const embed = new Discord.MessageEmbed()
          .setTitle(user.username + " Just got a kiss from " + message.author.username)
          .setImage(response.body.url)
          .setColor("RANDOM")
          .setDescription((user.toString() + " got a kiss from " + message.author.toString()))
          .setFooter(`this is so cute` + "- User Call Bot: " + message.author.username)
          .setURL(response.body.url);
      message.channel.send(embed);
        })
    }
}
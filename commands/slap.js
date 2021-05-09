const Discord = require('discord.js');
const superagent = require('superagent');
module.exports ={ 
    name:"slap",
    desciption:"Slap SomeOne !",
    async run(client,message,args){
      
        const user = message.mentions.users.first();
        message.delete();
            if(!user) return message.channel.send({embed: {
                color: 16734039,
                description: "You must mention someone to slap!"
            }}).then((sent) => {
                setTimeout(() => {
                    sent.delete();
                }, 5000);
            });
		if (message.author === user) {
           return await message.channel.send({embed: {
                color: 16734039,
                description: "You cant slap yourself!"
            }}).then((sent) => {
                setTimeout(() => {
                    sent.delete();
                }, 5000);
            });
		}
            superagent.get('https://nekos.life/api/v2/img/slap')
                .end((err, response) => {
              const embed = new Discord.MessageEmbed()
              .setTitle(user.username + " just got slapped by " + message.author.username)
              .setImage(response.body.url)
              .setColor(`RANDOM`)
              .setDescription((user.toString() + " got slapped by " + message.author.toString()))
              .setFooter(`That must hurt ._.`+ "- User Call Bot: " + message.author.username)
              .setURL(response.body.url);
                message.channel.send(embed);
            })

    }

}

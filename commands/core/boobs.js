const superagent = require("superagent");
const Discord = require('discord.js')
const rp = require('request-promise-native');

module.exports = {

    name: 'boobs',
    aliases: ['bbs'],
    category: 'sex',
    utilisation: '{prefix}boobs',

    execute(client, message ,args){
        if (!message.channel.nsfw) {
            message.react('💢');
            return message.channel.send({embed: {
                    color: 16734039,
                    description: "You can use this command in an NSFW Channel!"
                }})
        }
    
      return rp.get('http://api.oboobs.ru/boobs/0/1/random').then(JSON.parse).then(function(res)  {
        return rp.get({
            url:'http://media.oboobs.ru/' + res[0].preview,
            encoding: null
        });
    }).then(function(res)   {
    
    const embed = new Discord.MessageEmbed()
          .setTitle("You want Boobs ? Here")
          .setColor(`RANDOM`)
          .setImage("attachment://file.png").attachFiles([{ attachment: res, name: "file.png" }])
          .setFooter(`Tags: boobs `)
    
    
        message.channel.send(embed);
        })

    }
}

const superagent = require("superagent");
const Discord = require('discord.js')
module.exports = {
    name: "cum",
    description: "Display a random cum image/gif",

    async run(message,client,args){
        if (!message.channel.nsfw) return message.channel.send({embed: {
            color: 16734039,
            description: "You can use this command in an NSFW Channel!"
        }})

    superagent.get('https://nekos.life/api/v2/img/cum')
        .end((err, response) => {
        const embed = new Discord.MessageEmbed()
        .setTitle("You want this ? Cum ? Okay")
        .setImage(response.body.url)
        .setColor(`RANDOM`)
        .setFooter(`Tags: cum `+ "- User Call Bot: " + message.author.username)
        .setURL(response.body.url);
        message.channel.send(embed);
        })

    }
}
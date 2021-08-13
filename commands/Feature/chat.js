const Discord = require("discord.js")
const axios = require('axios');


module.exports = {
    name: 'chat',
    aliases: [],
    category: 'Feature',
    utilisation: '{prefix}chat <content>',
    description: "Using AI chat Bot",
    async run(client, message, args) {

        const res = await axios.get(`http://api.brainshop.ai/get?bid=155429&key=mxAU5RVksNAqBKAQ&uid=1&msg=${encodeURIComponent(args.join(' '))}`);

        let question = message.content.slice(7);
        message.delete();
        let embed = new Discord.MessageEmbed()
            .setThumbnail(`https://i.pinimg.com/736x/81/a1/68/81a168b12a2d827c03dbf2f5c22c4761.jpg`)
            .setColor('RANDOM')
            .addField('**💭You say:**', `${question}`)
            .addField('**📫My Answer: **', (res.data.cnt))
            .setFooter("This guy call me --> " + message.author.username)
            .setTimestamp()
        message.channel.send(embed);
    }
}
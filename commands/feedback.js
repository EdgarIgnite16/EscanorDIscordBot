const Discord = require('discord.js');
const { fblogID } = require('../config.json');
const { run } = require('./help');
module.exports = {
    name:"feedback",
    async run(client,message,args){
        let question = message.content.slice(11);
        message.delete()
        message.channel.send('Đã gửi feedback thành công !').then((sent) => {
            setTimeout(() => {
                sent.delete();
            }, 3000);
        });


        const fblog = client.channels.cache.get(fblogID);
        if (!fblog) return;
        const embed = new Discord.MessageEmbed();
        embed 
        .setTitle(`Feedback`)
        .setColor('RANDOM')
        .setDescription(question)
        .setFooter("Phản Hồi của người lạ")
        .setTimestamp();
        fblog.send(embed);
    }

}

const Discord = require('discord.js');
const { fblogID } = require('../config.json');
const { run } = require('./help');
module.exports = {
    name:"feedback",
    description: "Give feedback",
    async run(client,message,args){
        if(message.channel.type !== 'dm'){
            return await message.channel.send({
                embed: {
                    color:  5767167,
                    description: "Vui lòng nhắn riêng cho bot !"
                }
            }).then((sent) => {
                setTimeout(() => {
                    sent.delete();
                }, 4000);
            });
        }else{
            if(message.content.length > 1024 ){
                return await message.channel.send({
                    embed: {
                        color:  5767167,
                        description: "Vui lòng nhập dưới 1024 kí tự !"
                    }
                }).then((sent) => {
                    setTimeout(() => {
                        sent.delete();
                    }, 4000);
                });
            }else{
                await message.react ('✔');
                message.channel.send('Đã gửi feedback thành công !');
                const fblog = client.channels.cache.get(fblogID);
                if (!fblog) return;
                const embed = new Discord.MessageEmbed()
                .setTitle(`Feedback`)
                .setColor('RANDOM')
                .setDescription(message.content.slice(11))
                .setFooter("Phản Hồi của người lạ")
                .setTimestamp();
                fblog.send(embed);
            
            }
        }
        
    }
}

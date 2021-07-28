const Discord = require('discord.js');
const { fblogID } = require('../../config/config.json');

module.exports = {
    name: 'feedback',
    aliases: ['fb'],
    category: 'Feature',
    utilisation: '{prefix}feedback <content>, {prefix}fb <content> (dm for bot only)',
    description: "Give feedback to admin",
    async run(client,message,args){
        if(message.channel.type !== 'dm'){
            message.delete();
            await message.channel.send({
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

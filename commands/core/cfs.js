const Discord = require('discord.js');
const { cfschannelID } = require('../../config/config.json');
const fs = require('fs');
const picExt = [".webp", ".jpg", ".png", ".jpeg", ".gif"];
const videoExt = [".mp4", ".webm", ".mov"];

module.exports = {
    
    name: 'cfs',
    aliases: [],
    category: 'feature',
    utilisation: '{prefix}cfs',
    
    execute(client, message, args){
      if(message.channel.type !== 'dm'){
        message.delete();
        message.channel.send({
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
            return message.channel.send({
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
            message.react ('💕');
            message.channel.send('Đã gửi confesstion thành công !');
            const cfsChannel = client.channels.cache.get(cfschannelID);
            if (!cfsChannel) return;
            const embed = new Discord.MessageEmbed()
                .setTitle(`❤--Confession--❤`)
                .setDescription(message.content.slice(6))
                .setColor('RANDOM')
                .setFooter(" WAL confession ")
                .setTimestamp();
            if (message.attachments.array().length > 0) {
              let attachment = message.attachments.array()[0];
              // gửi ảnh
              picExt.forEach(ext => {
                if (attachment.name.endsWith(ext))
                  embed.setImage(attachment.attachment);
              });
              // gửi video 
              videoExt.forEach(ext => {
                if (attachment.name.endsWith(ext))
                  cfsChannel.send(attachment);
              });
            }
        
        cfsChannel.send(embed);
        }
    }
  }
}
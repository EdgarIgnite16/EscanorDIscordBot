const Discord = require('discord.js');
const fs = require('fs');
const { cfschannelID } = require('../../config/config.json');
const picExt = [".webp", ".jpg", ".png", ".jpeg", ".gif"];
const videoExt = [".mp4", ".webm", ".mov"];

module.exports = {
    name: 'ban',
    aliases: [],
    category: 'Feature',
    utilisation: '{prefix}cfs <content> (dm for bot only)',
    description: "Give confession to server Lozer",
    async run (client, message, args){
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
          await message.react ('💕');
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
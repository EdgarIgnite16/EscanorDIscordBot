const Discord = require('discord.js');
const fs = require('fs');
const { count } = require('../count.json');
const { cfschannelID } = require('../config.json');

const picExt = [".webp", ".jpg", ".png", ".jpeg", ".gif"];
const videoExt = [".mp4", ".webm", ".mov"];

module.exports = {
    name: "cfs",
    description: "Give confession",
    
    
    async run (client, msg, args) {
    if(msg.author.bot) return;//khong chap nhan cfs tu bot
    if(msg.channel.type !== 'dm') return;//khong chap nhan tin nao tru tin nhan gui thang truc tiep
    if(msg.content.length < 1 ) return msg.channel.send ('Hãy nhập nội dung để gửi !');
    else{
      if(msg.content.length > 1024 ) return msg.channel.send ('cfs chỉ được gửi dưới 1024 kí tự !');
    else{
      await msg.react ('💕');
      msg.channel.send('Đã gửi confesstion thành công !');
      let count = JSON.parse(fs.readFileSync('./count.json')).count;
      count++;
      const cfsChannel = client.channels.cache.get(cfschannelID);
      if (!cfsChannel) return;
      const embed = new Discord.MessageEmbed();
      embed 
        .setTitle(`❤--Confession--❤`)
        .setDescription(msg.content.slice(6))
        .setColor('RANDOM')
        .setFooter(" WAL confession ")
        .setTimestamp();
        if (msg.attachments.array().length > 0) {
          let attachment = msg.attachments.array()[0];
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
    fs.writeFileSync('./count.json', JSON.stringify({ count: count }));
        }
    }
    }
}
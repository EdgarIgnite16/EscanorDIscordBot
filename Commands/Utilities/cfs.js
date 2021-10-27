// const { MessageEmbed } = require("discord.js");
// const { cfschannelID } = require('../../config/config.json');
// const picExt = [".webp", ".jpg", ".png", ".jpeg", ".gif"];
// const videoExt = [".mp4", ".webm", ".mov"];

// module.exports = {
//     name: 'cfs',
//     aliases: [],
//     category: 'Utilities',
//     utilisation: '{prefix}cfs <content> (dm for bot only)',
//     description: "Give confession to server Lozer",
//     execute(message, args, commandName, client, Discord) {
//         if (message.channel.type !== 'dm') {
//             message.delete();
//             const WrongPlace = new MessageEmbed()
//                 .setColor("RED")
//                 .setDescription("Nhắn riêng cho bot để gửi confession nha bạn ui")
//             message.channel.send({embeds: [WrongPlace]})
//            .then((sent) => {
//                 setTimeout(() => {
//                     sent.delete();
//                 }, 4000);
//             });
//         } else {
//             const contentCFS = `${args}`;
//             if (contentCFS.length > 1024) {
//                 const TooLong = new MessageEmbed()
//                     .setColor("RED")
//                     .setDescription("Bạn ơi ! Chức năng confession chỉ có thể được viết tối đa 1024 kí tự thôi nha :3")
//                 message.channel.send({embeds: [TooLong]})
//                 .then((sent) => {
//                     setTimeout(() => {
//                         sent.delete();
//                     }, 4000);
//                 });
//             } else {
//                 message.react('💕');
//                 message.channel.send('Đã gửi confesstion thành công !');
//                 const cfsChannel = client.channels.cache.get(cfschannelID);
//                 if (!cfsChannel) return;
//                 const embed = new MessageEmbed()
//                     .setTitle(`❤--Confession--❤`)
//                     .setDescription(contentCFS.slice(6))
//                     .setColor('RANDOM')
//                     .setFooter(" WAL confession ")
//                     .setTimestamp();
//                 if (message.attachments.array().length > 0) {
//                     let attachment = message.attachments.array()[0];
//                     // gửi ảnh
//                     picExt.forEach(ext => {
//                         if (attachment.name.endsWith(ext))
//                             embed.setImage(attachment.attachment);
//                     });
//                     // gửi video 
//                     videoExt.forEach(ext => {
//                         if (attachment.name.endsWith(ext))
//                             cfsChannel.send(attachment);
//                     });
//                 }
//                 cfsChannel.send({embeds: [embed]});
//             }
//         }
//     }
// }
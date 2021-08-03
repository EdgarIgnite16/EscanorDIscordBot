const Discord = require('discord.js');
module.exports = {
    name: 'say',
    aliases: [],
    category: 'Feature',
    utilisation: '{prefix}say <content>',
    description: "say to channel",
    async run (client, message, args) {
        let textChannel = message.mentions.channels.first()

        message.delete();
        
        if(textChannel){
            message.channel.send("Gửi Tin Nhắn Thành Công !").then((message) =>{
                setTimeout(() =>{
                    message.delete();
                }, 2000);
               });
        } 
        else{
            message.channel.send("Vui Lòng Nhập Kênh Cần Gửi !").then((message) => {
                setTimeout(() => {
                    message.delete();
                }, 5000);
            });
        }

        const embed = new Discord.MessageEmbed();
        if(textChannel){
        embed
            .setColor("RANDOM")
            .setTimestamp()
            .setDescription(args.slice(1).join(" "))
            textChannel.send(embed)
        }
    }
}
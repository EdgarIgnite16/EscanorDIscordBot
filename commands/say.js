const Discord = require('discord.js');
module.exports = {
    name: "say",
    desciption: "say command",

    async run (message, args) {
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
            .setTitle("Escanor is here...!")
            .setDescription(args.slice(1).join(" "))
            .setFooter("Ready To Fight !!!")
            .setColor("#f0e51d")
            .setThumbnail("https://i.pinimg.com/originals/0d/33/7d/0d337d531c587483833a6e956f85059e.jpg")
            .setTimestamp();
            textChannel.send(embed)
        }
    }
}
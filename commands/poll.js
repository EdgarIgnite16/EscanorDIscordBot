const Discord = require("discord.js");

module.exports = {
    name: "poll",
    description: "Create a poll",
    async run(client , message ,args){
        if (message.member.hasPermission("ADMINISTRATOR")){
            const member = await message.guild.member(message.author);
            let textChannel = message.mentions.channels.first();
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
                    .setTitle(":ballot_box: " +`${member.nickname}`+ " đã mở một cuộc thăm dò !",)
                    .setDescription(args.slice(1).join(" "))
                    .setFooter("Lưu ý : React bên đưới để phản hồi  • Vote created by " + `${member.nickname}`,)
                    .setTimestamp()
                    const pollTopic = await textChannel.send({embed})
                        await pollTopic.react(`✅`);
                        await pollTopic.react(`👌`);
                        await pollTopic.react(`😶`);
                        await pollTopic.react(`🤔`);
                        await pollTopic.react(`❌`);
            }
        }else{
            message.channel.send("you dont have administrator role to to this")
        }
    }
}
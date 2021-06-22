const Discord = require("discord.js");

module.exports = {
    name: "poll",
    description: "Create a poll",
    async run(client , message ,args){
        if (message.member.hasPermission("ADMINISTRATOR")){

            let pollChannel = message.mentions.channels.first();
            const member = await message.guild.member(message.author);
            const pollmessage = await args.slice(1).join(" ");
           
            if(!pollChannel){
                return message.channel.send("Vui Lòng Nhập Kênh Cần Gửi !").then((message) => {
                    setTimeout(() => {
                        message.delete();
                    }, 5000);
                });
            }else{
                if(pollmessage.length < 1){
                    return message.reply('Vui Lòng Nhập Tin Nhắn thăm dò');
                }else{
                    const embed = new Discord.MessageEmbed();
                    embed
                    .setColor("RANDOM")
                    .setTitle(":ballot_box: " +`${member.nickname}`+ " đã mở một cuộc thăm dò !",)
                    .setDescription(pollmessage)
                    .setFooter("Lưu ý : React bên đưới để phản hồi  • Vote created by " + `${member.nickname}`,)
                    .setTimestamp()
                    const pollTopic = await pollChannel.send({embed})
                        await pollTopic.react(`✅`);
                        await pollTopic.react(`👌`);
                        await pollTopic.react(`😶`);
                        await pollTopic.react(`🤔`);
                        await pollTopic.react(`❌`);
                }
            }
        }else{
            message.reply("bạn không có quyền thực thi lệnh này !")
        }
    }
}
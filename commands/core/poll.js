const Discord = require("discord.js");

module.exports = {

    name: 'poll',
    aliases: [],
    category: 'feature',
    utilisation: '{prefix}poll',

    execute(client , message ,args){
        if (message.member.hasPermission("ADMINISTRATOR")){

            let pollChannel = message.mentions.channels.first();
            const member = message.guild.member(message.author);
            const pollmessage = args.slice(1).join(" ");
           
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
                    pollChannel.send({embed})
                }
            }
        }else{
            message.reply("bạn không có quyền thực thi lệnh này !")
        }
    }
}
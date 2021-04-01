const Discord = require("discord.js");

module.exports = {
    name: "poll",
    description: "Create a poll",
    async run(client , message ,args){
        const pollmessage = await args.join(" ");
        message.delete()
        if (message.member.hasPermission("ADMINISTRATOR")){
            if (pollmessage.length <= 0) return message.channel.send({embed: {
                color: 16734039,
                description: "You must provide a text to ask a question!"
            }})
             const embed = new Discord.MessageEmbed()
                .setTitle(":ballot_box: Bang chủ cái bang `" +`${message.author.username}` + "` đã mở cuộc họp thượng đỉnh ! :ballot_box:",)
                .setColor("RANDOM")
                .setDescription(pollmessage)
                .setFooter("Lưu ý : React bên đưới để phản hồi  • Vote created by " + `${message.author.username}`,)
                .setTimestamp()
                const pollTopic = await message.channel.send({embed})
                    await pollTopic.react(`✅`);
                    await pollTopic.react(`👌`);
                    await pollTopic.react(`😶`);
                    await pollTopic.react(`🤔`);
                    await pollTopic.react(`👀`);
                    await pollTopic.react(`❌`);
        }else{
            message.channel.send("you dont have administrator role to to this")
        }
    }
}
const Discord = require("discord.js");

module.exports = {
    name: "poll",
    description: "Create a poll",
    async run(client , message ,args){
        const pollmessage = await args.join(" ");
        message.delete()
        var pollrandom = ["✅", "❌",];  
        
        if (pollmessage.length <= 0) return message.channel.send({embed: {
                    color: 16734039,
                    description: "You must provide a text to ask a question!"
                }})

        const embed = new Discord.MessageEmbed()
        .setTitle(":ballot_box: " +`${message.author.username}` + " đã mở phiếu vote ! :ballot_box:",)
        .setColor("RANDOM")
        .setDescription(pollmessage)
        .setFooter("Lưu ý : Thời Gian vote là 30s • Vote created by " + `${message.author.username}`,)
        .setTimestamp()
        const pollTopic = await message.channel.send({embed})
        await pollTopic.react(`✅`);
        await pollTopic.react(`🤔`);
        await pollTopic.react(`👀`);
        await pollTopic.react(`❌`);
        // Create a reaction collector
        const filter = (reaction) => reaction.emoji.name === '✅';
        const collector = pollTopic.createReactionCollector(filter, { time: 10000 })
        collector.on('end', collected => message.channel.send({embed: {
                    description: "Kết Quả Là: " + pollrandom[Math.floor(Math.random()*pollrandom.length)]
                }})
        );
    }
}
const { MessageEmbed } = require("discord.js");

module.exports = {
    name: 'poll',
    aliases: [],
    category: 'Utilities',
    utilisation: '{prefix}poll <content>',
    description: "poll everyone",
    permissions: 'ADMINISTRATOR',
    execute(message, args, commandName, client, Discord) {
        message.delete();
        let pollChannel = message.mentions.channels.first();
        const member =  message.author;
        const pollmessage =  args.slice(1).join(" ");

        if (!pollChannel) {
            let ChannelChecking = new MessageEmbed()
                .setColor("RED")
                .setDescription(`Vui lòng nhập kênh cần gửi !`)
            return message.channel.send({embeds: [ChannelChecking]})
            .then((sent) => {
                setTimeout(() => {
                    sent.delete();
                }, 5000);
            });
        } else {
            if (pollmessage.length < 1) {
                let MessageLength = new MessageEmbed()
                    .setColor("RED")
                    .setDescription(`Vui lòng nhập thông điệp để gửi !`)
                return message.channel.send({embeds: [MessageLength]})
                .then((sent) => {
                    setTimeout(() => {
                        sent.delete();
                    }, 5000);
                });
            } else {
                const embed = new MessageEmbed()
                .setColor("RANDOM")
                .setTitle(":ballot_box: " + `${member.username}` + " đã mở một cuộc thăm dò !", )
                .setDescription(pollmessage)
                .setFooter("Lưu ý : React bên đưới để phản hồi  • Vote created by " + `${member.nickname}`, )
                .setTimestamp()
                pollChannel.send({embeds: [embed]})
                .then(items => {
                    items.react("✅");
                    items.react("😶");
                    items.react("❌");
                });
            }
        }
    }
}
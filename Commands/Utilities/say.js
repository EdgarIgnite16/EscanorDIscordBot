const { MessageEmbed } = require("discord.js");
module.exports = {
    name: 'say',
    aliases: [],
    category: 'Utilities',
    utilisation: '{prefix}say <content>',
    description: "say to channel",
    execute(message, args, commandName, client, Discord) {
        message.delete();
        let textChannel = message.mentions.channels.first()
        if (textChannel) {
            const embedChecking = new MessageEmbed()
            .setColor("RANDOM")
            .setDescription("Gửi thông điệp thành công !")
            message.channel.send({embeds: [embedChecking]})
            .then((message) => {
                setTimeout(() => {
                    message.delete();
                }, 2000);
            });
        } else {
            const ErrorCommand = new MessageEmbed()
            .setColor("RANDOM")
            .setDescription("Vui lòng nhập kênh cần gửi !")
            message.channel.send({embeds: [ErrorCommand]})
            .then((message) => {
                setTimeout(() => {
                    message.delete();
                }, 2000);
            });
        }

        if (textChannel) {
            const embed = new MessageEmbed()
            .setColor("RANDOM")
            .setTitle('Một kẻ lạ mặt đến và nói.... ')
            .setDescription(`${args.slice(1).join(" ")}`)
            textChannel.send({embeds: [embed]})
        }
    }
}
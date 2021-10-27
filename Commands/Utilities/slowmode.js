const { MessageEmbed } = require("discord.js");
module.exports = {
    name: 'slowmode',
    aliases: [],
    category: 'Utilities',
    utilisation: '{prefix}slowmode <time>',
    description: "Using power or GOD to slow mode channel",
    permissions: 'ADMINISTRATOR',
    execute(message, args, commandName, client, Discord) {
        let duration = args.toString().toLowerCase();

        if (duration.length < 1) {
            const embed1 = new MessageEmbed()
            .setColor('RANDOM')
            .setDescription("xin hãy nhập nội dung thực thi lệnh slowmode !")
            return message.channel.send({embeds: [embed1]})
            .then((message) => {
                setTimeout(() => {
                    message.delete();
                }, 5000);
            });
        }

        if (duration === 'disable' || duration === 'off') {
            duration = 0;
            message.channel.setRateLimitPerUser(duration);
            const embed2 = new MessageEmbed()
            .setColor('GREEN')
            .setDescription("Đã tắt slowmode cho channel này !")
            return message.channel.send({embeds: [embed2]})
            .then((message) => {
                setTimeout(() => {
                    message.delete();
                }, 5000);
            });
            }

        if (isNaN(duration)) {
            const embed3 = new MessageEmbed()
            .setColor('GREEN')
            .setDescription("xin hãy nhập thời gian !")
            return message.channel.send({embeds: [embed3]})
            .then((message) => {
                setTimeout(() => {
                    message.delete();
                }, 5000);
            });
        }

        message.channel.setRateLimitPerUser(duration);
        const embed4 = new MessageEmbed()
        .setColor('GREEN')
        .setDescription(`Channel đã được đặt thời gian slow mode là **${duration} giây**`)
        message.channel.send({embeds: [embed4]})
    }
}
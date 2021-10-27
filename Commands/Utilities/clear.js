const { MessageEmbed } = require("discord.js");

module.exports = {
    name: 'clear',
    aliases: [],
    category: 'Utilities',
    utilisation: '{prefix}clear <Number clear message>',
    description: "Using for clear message",
    permissions: 'MANAGE_CHANNELS',
    execute(message, args, commandName, client, Discord) {
        const amount = args.join(" ");
        if (!amount) {
            let ErrorDelete1 = new MessageEmbed()
                .setColor("RED")
                .setDescription(`Vui lòng nhập số lượng tin nhắn cần xoá !`)
            return message.channel.send({embeds: [ErrorDelete1]})
            .then((sent) => {
                setTimeout(() => {
                    sent.delete();
                }, 5000);
            });
        } 
        if (amount > 99) {
            let ErrorDelete2 = new MessageEmbed()
                .setColor("RED")
                .setDescription(`Bạn không thể xoá hơn 99 tin nhắn cùng 1 lúc !`)
            return message.channel.send({embeds: [ErrorDelete2]})
            .then((sent) => {
                setTimeout(() => {
                    sent.delete();
                }, 5000);
            });
        }

        if (amount < 1) {
            let ErrorDelete = new MessageEmbed()
                .setColor("RED")
                .setDescription(`Chức năng chỉ hoạt động chỉ khi số lượng tin nhắn xoá trên 1 !`)
            return message.channel.send({embeds: [ErrorDelete]})
            .then((sent) => {
                setTimeout(() => {
                    sent.delete();
                }, 5000);
            });
        }

        message.channel.messages.fetch({ limit: amount })
        .then(messages => {
            message.channel.bulkDelete(messages)
        });
        let SuccessDelete = new MessageEmbed()
                .setColor("GREEN")
                .setDescription(`Xoá Thành Công **${amount}** tin nhắn!`)
        message.channel.send({embeds: [SuccessDelete]})
        .then((sent) => {
            setTimeout(() => {
                sent.delete();
            }, 5000);
        });
    }
}
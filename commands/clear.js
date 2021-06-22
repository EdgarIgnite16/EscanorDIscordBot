module.exports = {
    name: "clear",
    description: "Clears messages",

    async run (client, message, args) {
        if (message.member.hasPermission("MANAGE_CHANNELS")) {
        const amount = args.join(" ");

        if(!amount) return message.channel.send('Vui lòng nhập số lượng tin nhắn cần xoá !').then((sent) => {
            setTimeout(() => {
                sent.delete();
            }, 5000);
        });

        if(amount > 100) return message.channel.send(`Bạn không thế xoá lớn hơn 100 tin nhắn !`).then((sent) => {
            setTimeout(() => {
                sent.delete();
            }, 5000);
        });

        if(amount < 1) return message.channel.send(`Bạn chỉ có thể xoá ít nhất 1 tin nhắn !`).then((sent) => {
            setTimeout(() => {
                sent.delete();
            }, 5000);
        });

        await message.channel.messages.fetch({limit: amount}).then(messages => {
            message.channel.bulkDelete(messages)
        });

        message.channel.send('Xoá Thành Công !').then((sent) => {
            setTimeout(() => {
                sent.delete();
            }, 5000);
        });
        }
    }
}
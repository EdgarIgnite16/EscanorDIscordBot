module.exports = {
    name: 'leave',
    async run(client, message, args) {
        if (!message.guild.me.voice.channel) {
            message.channel.send({
                embed: {
                    color: 'ORANGE',
                    footer: 'Powah by Edgar',
                    description: `Chưa có mặt tại **Voice Channel**`,
                    timestamp: new Date(),
                },
            });
        }else{
            await message.member.voice.channel.leave();
            message.channel.send({
                embed: {
                    color: 'ORANGE',
                    footer: 'Powah by Edgar',
                    description: `Rời **Voice Channel** Thành Công`,
                    timestamp: new Date(),
                },
            });
        }
    },
};
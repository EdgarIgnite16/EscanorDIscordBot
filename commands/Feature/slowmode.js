module.exports = {
    name: 'slowmode',
    aliases: [],
    category: 'Feature',
    utilisation: '{prefix}slowmode <time>',
    description: "Using power or GOD to slow mode channel",
    async run(client, message, args) {
        if (message.member.hasPermission('ADMINISTRATOR')) {

            let duration = args.toString().toLowerCase();

            if (duration.length < 1) {

                message.channel.send({
                    embed: {
                        color: 5767167,
                        description: `xin hãy nhập nội dung thực thi lệnh slowmode`
                    }
                });
                return;
            }

            if (duration === 'disable' || duration === 'off') {
                duration = 0;
                message.channel.setRateLimitPerUser(duration);
                return message.channel.send({
                    embed: {
                        color: 5767167,
                        description: `Đã tắt slowmode cho channel này !`
                    }
                });
            }

            if (isNaN(duration)) {
                message.channel.send({
                    embed: {
                        color: 5767167,
                        description: `xin hãy nhập thời gian !`
                    }
                });
                return;
            }

            message.channel.setRateLimitPerUser(duration);
            message.channel.send({
                embed: {
                    color: 5767167,
                    description: `Channel đã được đặt thời gian slow mode là ${duration} giây`
                }
            })
        } else {
            await message.channel.send({
                embed: {
                    color: 5767167,
                    description: "bạn không có quyền thực thi lệnh này !"
                }
            }).then((sent) => {
                setTimeout(() => {
                    sent.delete();
                }, 15000);
            });
        }
    }
}
const {Client, MessageEmbed, Message} = require("discord.js");

module.exports = {
    name: 'ban',
    aliases: ['GoodByeNoSeeAgain'],
    category: 'Moderator',
    utilisation: '{prefix}ban <username>',
    description: "Using power or GOD to ban member",
    permissions: "MANAGE_MESSAGES",
    execute(message, args, commandName, client, Discord) {
        const member = message.mentions.users.first();
        let reason = args.slice(1).join(" ");

        //empty reason
        if (reason === "") {
            reason = "không có";
        }

        if (!member) {
            const CantMute = new MessageEmbed()
                .setColor("RED")
                .setFooter("Cách sử dụng: {prefix}mute <@username> [reason]")
                .setDescription("Không tìm thấy đối tượng để ban !\nBạn phải dùng **<@username>** để thực thi")
            return message.channel.send({
                    embeds: [CantMute]
                })
                .then((sent) => {
                    setTimeout(() => {
                        sent.delete();
                    }, 10000);
                });
        }

        // can not mute yourself 
        if (member.id === message.author.id) {
            const YouDumb = new MessageEmbed()
                .setColor("RED")
                .setFooter("Cách sử dụng: {prefix}mute <@username> [reason]")
                .setDescription("Bạn không thể tự kick chính mình !")
            return message.channel.send({
                    embeds: [YouDumb]
                })
                .then((sent) => {
                    setTimeout(() => {
                        sent.delete();
                    }, 10000);
                });
        }

        // can not mute ME :)))
        if (member.id === '806542996166017135') {
            const HeyYou = new MessageEmbed()
                .setColor("RED")
                .setFooter("Cách sử dụng: {prefix}mute <@username> [reason]")
                .setDescription("Bạn không thể kick tôi :< ")
            return message.channel.send({
                    embeds: [HeyYou]
                })
                .then((sent) => {
                    setTimeout(() => {
                        sent.delete();
                    }, 10000);
                });
        }

        //check role highest position
        if (member.roles.highest.position >= message.member.roles.highest.position) {
            const CantSendMute2 = new MessageEmbed()
                .setColor("RED")
                .setFooter("Cách sử dụng: {prefix}mute <@username> [reason]")
                .setDescription("Bạn không thể kick người này !")
            return message.channel.send({
                    embeds: [CantSendMute2]
                })
                .then((sent) => {
                    setTimeout(() => {
                        sent.delete();
                    }, 10000);
                });
        }
            //kick member
            member.ban({ 
                reason: reason, 
            }).then(() => {
                const embed = new MessageEmbed()
                    .setColor("#f5142a")
                    .setThumbnail(member.user.displayAvatarURL())
                    .setDescription(`Tạm biệt và không hẹn gặp lại <@${member.id}> !`)
                    .addField(`**Lý do: **`, reason, true)
                    .addField("**Roles :**", `${member.roles.cache.map(role => role.toString()).join(' ').replace("@everyone", " ")}`, true)
                    .setFooter(`người thi hành án ` + message.author.username)
                    .setTimestamp();
                return message.channel.send({embeds: [embed]})
                    .then((sent) => {
                    setTimeout(() => {
                        sent.delete();
                    }, 60000);
                });
            });
      
            // const MissingPermission = new MessageEmbed()
            //     .setColor("RED")
            //     .setDescription("Tôi không có quyền thực hiện lệnh này !\nTôi cần quyền Ban Members để thực thi !")
            // return message.channel.send({embeds: [MissingPermission]})
            //     .then((sent) => {
            //         setTimeout(() => {
            //             sent.delete();
            //         }, 10000);
            // });
        
    }

}
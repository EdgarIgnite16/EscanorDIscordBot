const { MessageEmbed } = require('discord.js');
const moment = require('moment')

module.exports = {
    name: 'user-info',
    aliases: ['uinfo','whois'],
    category: 'Utilities',
    utilisation: '{prefix}user-info <username>, {prefix}uinfo <username>, {prefix}whois <username>',
    description: "user infomation",
    execute(message, args, commandName, client, Discord) {
        //check if more than 1 user is mentioned
        if (args.length > 1) {
            let ErrorFunction = new MessageEmbed()
                .setColor("RED")
                .setDescription('Vui lòng chỉ nhập tên 1 người !')
            return message.channel.send({embeds: [ErrorFunction]})
            .then((sent) => {
                setTimeout(() => {
                    sent.delete();
                }, 3000);
            });
        }
        //check if there is no arguments
        if (!args[0]) {
            let ErrorFunction = new MessageEmbed()
            .setColor("RED")
            .setDescription('Vui lòng nhập 1 ai đó để thực thi lệnh !')
            return message.channel.send({embeds: [ErrorFunction]})
            .then((sent) => {
                setTimeout(() => {
                    sent.delete();
                }, 3000);
            });
        }
        //check if there is 1 argument
        if (args[0]) {
            //get the first user mentioned
            let member = message.mentions.members.first()
            //if the member exists create an embed with info about that user and send it to the channel
            if (member) {
                const embed = new MessageEmbed()
                    .setColor("RANDOM")
                    // .setAuthor(`${member.user.tag}`, member.user.displayAvatarURL({ dynamic: true }))
                    .setDescription("**All information about **`" + `${member.displayName}` + "`** is here !**")
                    .setThumbnail(member.user.displayAvatarURL({ dynamic: true }))
                    .addField("**Username:**", `${member.user.username}`, true)
                    .addField("**UserTag:**", `#${member.user.tag}`, true)
                    .addField("**UserID:**", `${member.user.id}`, true)
                    .addField("**Joined On:**", `${member.joinedAt.toLocaleString()}`, true)
                    .addField("**Created On:**", `${member.user.createdAt.toLocaleString()}`, true)
                    .addField("**Roles list:**", `${member.roles.cache.map(role => role.toString()).join(' ').replace("@everyone", " ")}`)
                    .setFooter(`${member.displayName}`, member.user.displayAvatarURL({ dynamic: true }))
                    .setTimestamp()
                return message.channel.send({embeds: [embed]});
            } else {
                const ErrorEmbed = new MessageEmbed()
                    .setColor("RED")
                    .setDescription('Vui lòng nhập tên người dùng mà bạn muốn xem thông tin !')
                return message.channel.send({embeds: [ErrorEmbed]})
                .then((sent) => {
                    setTimeout(() => {
                        sent.delete();
                    }, 5000);
                });
            }
        }
    }
}
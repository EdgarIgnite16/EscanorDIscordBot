const { MessageEmbed } = require("discord.js");
const { prefix } = "e!";

module.exports = {
    name: 'help',
    aliases: ['h'],
    category: 'Utilities',
    utilisation: '{prefix}help <command name>',
    description: "Help Commands",
    execute(message, args, commandName, client, Discord) {
        if (!args[0]) {
            const Animal = message.client.commands.filter(x => x.category == 'Animal').map((x) => '`' + x.name + '`').join(', ');
            const Funny = message.client.commands.filter(x => x.category == 'Funny').map((x) => '`' + x.name + '`').join(', ');
            const Utilities = message.client.commands.filter(x => x.category == 'Utilities').map((x) => '`' + x.name + '`').join(', ');
            const Moderator = message.client.commands.filter(x => x.category == 'Moderator').map((x) => '`' + x.name + '`').join(', ');
            const NSFW = message.client.commands.filter(x => x.category == 'NSFW').map((x) => '`' + x.name + '`').join(', ');
            const embedSend = new MessageEmbed()
            .setColor("GREEN")
            .setFooter("List Commands")
            .setAuthor("Help Commands!")
            .setThumbnail(message.guild.iconURL())
            .setDescription("Nhập Prefix `e! + <lệnh>` để thực thi **LỆNH**\nBạn có thể nhập `e!help + <lệnh>` để xem hướng đẫn sử dụng")
            // .addFields (
            //     {name: 'Inline field title', value: `${Moderator}`, inline: true },
            //     // { name: '🔐 Moderator', value: `${Moderator}`},
            //     // { name: '📕 Utilities', value: `${Utilities}`},
            //     // { name: '🎆 Funny', value: `${Funny}`},
            //     // { name: '⚠️ NSFW', value: `${NSFW}`},
            // )
            .addField("🔐 Moderator", `${Moderator}`)
            .setFooter(`${message.guild.name}`, message.guild.iconURL())
            .setTimestamp()
            
            message.channel.send({embeds: [embedSend]});
        } else {
            const command = message.client.commands.get(args.join(" ").toLowerCase()) || message.client.commands.find(x => x.aliases && x.aliases.includes(args.join(" ").toLowerCase()));

            if (!command){
                const embedSend = new MessageEmbed()
                .setColor("RED")
                .setDescription("Tôi không tìm thấy lệnh này !")
                .setTimestamp()
                return message.channel.send({embeds: [embedSend]})
                .then((sent) => {
                    setTimeout(() => {
                        sent.delete();
                    }, 10000);
                });
            }

            const HelpPannelEmbed = new MessageEmbed()
                .setColor("RANDOM")
                .setAuthor("Help Pannel")
                .setFooter("Cách sử dụng lệnh")
                .setThumbnail(message.guild.iconURL())
                .setDescription("Thông tin của các dòng lệnh dưới đây.\nĐối số bắt buộc `<>`, đối số tùy chọn `[]`")
                .addFields(
                    // { name: '🧾 Name', value: `${command.name}`, inline: true },
                    // { name: '🧾 Category', value: `${command.category}`, inline: true },
                    // { name: '🧾 Aliase(s)', value: `${command.aliases.length < 1 ? 'None' : command.aliases.join(', ')}`, inline: true },
                    // { name: '🧾 Utilisation', value: `${command.utilisation.replace('{prefix}', prefix)}`, inline: true },
                    // { name: '🧾 Description', value: `${command.description}`, inline: false },
                )
                .setTimestamp()
            message.channel.send({embeds: [HelpPannelEmbed]});
        };
    },
};
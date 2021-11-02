const { MessageEmbed } = require("discord.js");
const { stripIndents } = require("common-tags");
const { prefix } = "e!";

module.exports = {
    name: 'help',
    aliases: ['h'],
    category: 'Utilities',
    // utilisation: '{prefix}help <command name>',
    utilisation: '{prefix}help',
    description: "Help Commands",
    execute(message, args, commandName, client, Discord) {
        // if (!args[0]) {
        //     const Animal = message.client.commands.filter(x => x.category == 'Animal').map((x) => '`' + x.name + '`').join(', ');
        //     const Funny = message.client.commands.filter(x => x.category == 'Funny').map((x) => '`' + x.name + '`').join(', ');
        //     const Utilities = message.client.commands.filter(x => x.category == 'Utilities').map((x) => '`' + x.name + '`').join(', ');
        //     const Moderator = message.client.commands.filter(x => x.category == 'Moderator').map((x) => '`' + x.name + '`').join(', ');
        //     const NSFW = message.client.commands.filter(x => x.category == 'NSFW').map((x) => '`' + x.name + '`').join(', ');
        //     const embedSend = new MessageEmbed()
        //     .setColor("GREEN")
        //     .setDescription("Nhập Prefix `e! + <lệnh>` để thực thi command\nBạn có thể nhập `e!help + <lệnh>` để xem hướng đẫn sử dụng")      
        //     .setFooter("List Commands")
        //     .setAuthor("Help Commands!")
        //     .addField("😺 Animal", `${Animal}`)
        //     .addField("🔐 Moderator", `${Moderator}`)
        //     .addField("📕 Utilities", `${Utilities}`)
        //     .addField("🎆 Funny", `${Funny}`)
        //     .addField("⚠️ NSFW", `${NSFW}`)
        //     .setThumbnail(message.guild.iconURL())
        //     .setFooter(`${message.guild.name}`, message.guild.iconURL())
        //     .setTimestamp()
        //     message.channel.send({embeds: [embedSend]});
        // } 
        // else {
        //     const command = message.client.commands.get(args.join(" ").toLowerCase()) || message.client.commands.find(x => x.aliases && x.aliases.includes(args.join(" ").toLowerCase()));

        //     if (!command){
        //         const embedSend = new MessageEmbed()
        //         .setColor("RED")
        //         .setDescription("Tôi không tìm thấy lệnh này !")
        //         .setTimestamp()
        //         return message.channel.send({embeds: [embedSend]})
        //         .then((sent) => {
        //             setTimeout(() => {
        //                 sent.delete();
        //             }, 10000);
        //         });
        //     }

        //     const HelpPannelEmbed = new MessageEmbed()
        //         .setColor("RANDOM")
        //         .setAuthor("Help Pannel")
        //         .setFooter("Cách sử dụng lệnh")
        //         .setThumbnail(message.guild.iconURL())
        //         .setDescription("Thông tin của các dòng lệnh dưới đây.\nĐối số bắt buộc `<>`, đối số tùy chọn `[]`")
        //         .addField('🧾 Name', `${command.name}`, true)
        //         .addField('🧾 Category', `${command.category}`, true)
        //         .addField('🧾 Aliase(s)', `${command.aliases.length < 1 ? 'None' : command.aliases.join(', ')}`, true)
        //         .addField('🧾 Utilisation', `${command.utilisation.replace('{prefix}', prefix)}`, true)
        //         .addField('🧾 Description', `${command.description}`, true)
        //         .setTimestamp()
        //     message.channel.send({embeds: [HelpPannelEmbed]});
        // };

            const embedSend = new MessageEmbed()
            .setColor("GREEN")
            .setFooter("List Commands")
            .setAuthor("Help Commands!")
            .setDescription("Nhập Prefix `e! + <lệnh>` để thực thi command")
            .addField("😺 Animal", "`cat`, `dog`, `goose`, `kemonomimi`, `lizard`")
            .addField("🔐 Moderator", "`ban`, `kick`, `mute`, `tempmute`, `unmute`")
            .addField("📕 Utilities", "`clear`, `dev`, `emoji-list`, `emoji`, `help`, `math`, `ping`, `poll`, `say`, `search-anime`, `slowmode`, `server-info`, `user-info`, `verdisjs`, `weather`")
            .addField("🎆 Funny", "`8ball`, `baka`, `cuddle`, `feed`, `gay`, `holo`, `hug`, `iq`, `kiss`, `meme`, `pat`, `poke`, `slap`, `smug`, `tickle`, `waifu`, `wallpaper`")
            .addField("⚠️ NSFW", "`anal`, `blowjob`, `boobs`, `cum`, `ero`, `erofeet`, `femdom`, `foxgirl`, `gasm`, `hentai`, `keta`, `pussy`, `spank`, `tits`, `yuri`")
            .setThumbnail(message.guild.iconURL())
            .setFooter(`${message.guild.name}`, message.guild.iconURL())
            .setTimestamp()
            message.channel.send({embeds: [embedSend]});
    },
};
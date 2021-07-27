const Discord = require('discord.js');
module.exports = {
    name: 'dms',
    aliases: [],
    category: 'Feature',
    utilisation: '{prefix}dms <message>',
    description: "If you want dms private to another one ! :>",
    async run(client, message, args) {
        if (message.channel.type === 'dm') return;
        let dUser =
            message.guild.member(message.mentions.users.first()) ||
            message.guild.members.get(args[0]);
            message.delete();
        if (!dUser) return message.channel.send("Can't find user!");
        let dMessage = args.join(' ').slice(22);
        if (dMessage.length < 1) {
            return message.reply('Try again');
        }
        const dmsembed = new Discord.MessageEmbed().setTitle("Bạn đã nhận được Message từ NGƯỜI LẠ ❤").setColor('#f02bc2').setFooter("DMs Private by Escanor 🔒 ").setTimestamp();
        dmsembed.setDescription(`${dMessage}`);
        dUser.send(dmsembed);
        const dmslog = new Discord.MessageEmbed().setTitle(`DMs Logs `).setColor('RANDOM').setFooter("DMs Private by Escanor 🔒 ").setTimestamp();
        dmslog.addField(`${message.author.username}, Bạn đã Gửi Tin Nhắn Ẩn Danh tới : `, dUser)
            .addField(`Nội Dung: `, dMessage);
    
        message.author.send(dmslog);
    
        message.delete()
        

    }
}
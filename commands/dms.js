const Discord = require('discord.js');
module.exports = {
    name: "dms",
    description: "Send a message to member in dms",
    async run(client, message, args) {
        if (message.channel.type === 'dm') return;
        let dUser =
            message.guild.member(message.mentions.users.first()) ||
            message.guild.members.get(args[0]);
        if (!dUser) return message.channel.send("Can't find user!");
        let dMessage = args.join(' ').slice(22);
        if (dMessage.length < 1) {
            return message.reply('Too WEAK');
        }
        const dmsembed = new Discord.MessageEmbed().setTitle("Bạn nhận được Message từ NGƯỜI LẠ ❤").setColor('#f02bc2').setTimestamp();
        dmsembed.setDescription(`${dMessage}`);
        dUser.send(dmsembed);
        const dmslog = new Discord.MessageEmbed().setTitle(`DMs Logs `).setColor('RANDOM').setTimestamp();
        dmslog.addField(`${message.author.username}, you has send an message to: `, dUser)
            .addField(`Description:`, dMessage);
        message.author.send(dmslog);
    
        message.delete()
        
        
    }
}
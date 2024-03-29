const { Client, Message, MessageEmbed, Collection } = require('discord.js')
const prefix  = "e!";

module.exports = {
    name: "messageCreate",
    /**
     *@param {Client} client
     *@param {Message} message
     */
    async execute(message, client, Discord) {
        if(!message.content.toLowerCase().startsWith(prefix) || message.author.bot) return;
        const args = message.content.slice(prefix.length).trim().split(/ +/);
        const commandName = args.shift().toLowerCase();
        const command = client.commands.get(commandName) || client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));

        if(!command) return;
        if(command.permissions){
            const authorPerms = message.channel.permissionsFor(message.author);
            if(!authorPerms || !authorPerms.has(command.permissions)) {
                const Noperms = new MessageEmbed()
                .setColor('RED')
                .setDescription(`Bạn không có quyền để sử dụng lệnh này`)
                return message.channel.send({embeds: [Noperms]})
                .then((sent) => {
                    setTimeout(() => {
                        sent.delete();
                    }, 5000);
                });
            };
        };

        const { cooldowns } = client;
        if(!cooldowns.has(command.name)) {
            cooldowns.set(command.name, new Collection())
        };

        const now = Date.now()
        const timestamps = cooldowns.get(command.name)
        const cooldownAmount = (command.cooldown || 1) * 1000;

        if(timestamps.has(message.author.id)) {
            const expirationTime = timestamps.get(message.author.id) + cooldownAmount;
            if(now < expirationTime) {
                const timeLeft = (expirationTime - now) / 1000;
                const timeLeftEmbed = new MessageEmbed()
                .setColor('#ff1e00')
                .setDescription(`Xin hãy đợi trong khoảng **${timeLeft.toFixed(1)}s** nữa để có thể chạy lệnh này 1 lần nữa !`)
                return message.channel.send({embeds: [timeLeftEmbed]})
                .then((sent) => {
                    setTimeout(() => {
                        sent.delete();
                    }, 5000);
                });
            };
        };

        timestamps.set(message.author.id, now);
        setTimeout(() => timestamps.delete(message.author.id) , cooldownAmount);

        try {
            command.execute(message, args, commandName, client, Discord);
        } 
        catch(error){
            console.error(error);
            const ErrorEmbed = new MessageEmbed()
            .setColor('#ff1e00')
            .setDescription(`Đã có lỗi sảy ra trong quá trình chạy lệnh T_T`)
            message.channel.send({embeds: [ErrorEmbed]});
        };
    }
}


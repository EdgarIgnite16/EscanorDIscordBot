const { MessageEmbed } = require('discord.js');
module.exports = {
    name: 'ping',
    aliases: ['latency', 'lag'],
    category: 'Utilities',
    utilisation: '{prefix}ping',
    description: "Check Ping Hosting",
    cooldown: 5,
    execute(message, args, commandName, client, Discord) {
        const Response = new MessageEmbed()
            .setTitle("My Pong is ...")
            .setColor("RANDOM")
            .setDescription(`Pong !!! --- Delay:\`${client.ws.ping}\`ms`)
            .setTimestamp()
        message.channel.send({embeds: [Response]});
    }
}
const Discord = require('discord.js');
const { random } = require('mathjs');

module.exports = {
    name: "ping",
    description: "test command",

    async run (client, message, args) {


        const ping = new Discord.MessageEmbed();
        ping
        .setTitle("My Pong is ...")
        .setColor("RANDOM")
        .setDescription(`Pong !!! --- Delay:\`${client.ws.ping}\`ms`)
        .setFooter("We are Loser")
        .setTimestamp()

        message.channel.send(ping);
    }
}
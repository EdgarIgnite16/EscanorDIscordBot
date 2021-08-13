const Discord = require("discord.js");

module.exports = {
    name: 'iq',
    aliases: [],
    category: 'Fun',
    utilisation: '{prefix}iq',
    description: "Give a point IQ",
    async run(client, message, args) {
        const iq = Math.floor(Math.random() * 226);
        const embed = new Discord.MessageEmbed()
            .setTitle(":brain: IQ Test:")
            .setDescription(":bulb: " + message.author.username + " IQ: `" + iq + "`")
            .setColor(`RANDOM`)
            .setTimestamp()
        message.channel.send(embed).then((sent) => {
            setTimeout(() => {
                sent.delete();
            }, 120000);
        });
    }
}
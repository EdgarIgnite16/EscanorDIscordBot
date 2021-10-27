const { MessageEmbed } = require("discord.js");

module.exports = {
    name: 'iq',
    aliases: [],
    category: 'Funny',
    utilisation: '{prefix}iq',
    description: "Give a point IQ",
    execute(message, args, commandName, client, Discord) {
        const iq = Math.floor(Math.random() * 226);
        const user = message.mentions.users.first() || message.author 
        const embed = new MessageEmbed()
            .setTitle(":brain: IQ Test:")
            .setDescription(":bulb: **" + user.username + "** IQ: `" + iq + "`")
            .setColor(`RANDOM`)
            .setTimestamp()
        message.channel.send({embeds: [embed]})
        .then((sent) => {
            setTimeout(() => {
                sent.delete();
            }, 120000);
        });    
    }
}
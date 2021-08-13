const Discord = require("discord.js");

module.exports = {
    name: 'gay',
    aliases: [],
    category: 'Fun',
    utilisation: '{prefix}gay',
    description: "Give a point gay",
    async run(client, message, args) {
        const iq = Math.floor(Math.random() * 100);
        const embed = new Discord.MessageEmbed()
            .setTitle("Kiểm tra mức độ LGBT (❁´◡`❁)")
            .setThumbnail(`https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Gay_Pride_Flag.svg/1200px-Gay_Pride_Flag.svg.png`)
            .setDescription("`" + message.author.username + "`" + " LGBT point: `" + iq + "%`")
            .setColor(`RANDOM`)
            .setTimestamp()
        message.channel.send(embed).then((sent) => {
            setTimeout(() => {
                sent.delete();
            }, 120000);
        });
    }
}
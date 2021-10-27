const { MessageEmbed } = require("discord.js");

module.exports = {
    name: 'gay',
    aliases: [],
    category: 'Funny',
    utilisation: '{prefix}gay',
    description: "Give a point gay",
    execute(message, args, commandName, client, Discord) {
        const iq = Math.floor(Math.random() * 100);
        const user = message.mentions.users.first() || message.author
        const embed = new MessageEmbed()
            .setTitle("Kiểm tra mức độ LGBT (❁´◡`❁)")
            .setThumbnail(`https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Gay_Pride_Flag.svg/1200px-Gay_Pride_Flag.svg.png`)
            .setDescription("`" + user.username + "`" + " LGBT point: `" + iq + "%`")
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
const { MessageEmbed } = require('discord.js')
const superagent = require('superagent');

module.exports = {
    name: 'kiss',
    aliases: [],
    category: 'Funny',
    utilisation: '{prefix}hkissug <username>',
    description: "kiss someone",
    execute(message, args, commandName, client, Discord) {
        const user = message.mentions.users.first();
        if (!user){
            const CantSend = new MessageEmbed()
            .setColor("RANDOM")
            .setDescription("**Hãy tag một người bạn nào đó để hôn :>**")
            return message.channel.send({embeds: [CantSend]})
        }
        if (message.author === user) {
            const SendButNoone = new MessageEmbed()
            .setColor("RANDOM")
            .setDescription("**Bạn cần phải hôn một ai đó :>\nBạn không thể hôn chính mình**")
            return message.channel.send({embeds: [SendButNoone]})
            .then((sent) => {
                setTimeout(() => {
                    sent.delete();
                }, 5000);
            });
        }
        superagent.get('https://nekos.life/api/v2/img/kiss')
            .end((err, response) => {
                const embed = new MessageEmbed()
                    .setTitle(`${message.author.username} hôn ${user.username}`)
                    .setDescription("Ahhhhhhh :3 ")
                    .setFooter(`Thật là lãng mạn :>`)
                    .setImage(response.body.url)
                    .setURL(response.body.url)
                    .setColor("RANDOM")
                message.channel.send({embeds: [embed]});
            })
    }
}
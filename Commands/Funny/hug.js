const { MessageEmbed } = require('discord.js')
const superagent = require('superagent');

module.exports = {
    name: 'hug',
    aliases: [],
    category: 'Funny',
    utilisation: '{prefix}hug <username>',
    description: "Hug someone",
    execute(message, args, commandName, client, Discord) {
        const user = message.mentions.users.first();
        if (!user){
            const CantSend = new MessageEmbed()
            .setColor("RANDOM")
            .setDescription("**Hãy tag một người bạn nào đó để ôm :>**")
            return message.channel.send({embeds: [CantSend]})
        }
        if (message.author === user) {
            const SendButNoone = new MessageEmbed()
            .setColor("RANDOM")
            .setDescription("**Bạn cần phải ôm một ai đó :>\nBạn không thể tự ôm chính mình**")
            return message.channel.send({embeds: [SendButNoone]})
            .then((sent) => {
                setTimeout(() => {
                    sent.delete();
                }, 5000);
            });
        }
        superagent.get('https://nekos.life/api/v2/img/hug')
            .end((err, response) => {
                const embed = new MessageEmbed()
                    .setTitle(`${user.username} nhận được một cái ôm từ  ${message.author.username}`)
                    .setDescription("UwU")
                    .setFooter(`Thật là ấm áp`)
                    .setImage(response.body.url)
                    .setURL(response.body.url)
                    .setColor("RANDOM")
                message.channel.send({embeds: [embed]});
            })
    }
}
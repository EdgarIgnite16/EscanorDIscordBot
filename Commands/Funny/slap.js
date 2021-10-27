const { MessageEmbed } = require('discord.js')
const superagent = require('superagent');

module.exports = {
    name: 'slap',
    aliases: [],
    category: 'Funny',
    utilisation: '{prefix}slap <username>',
    description: "slap someone",
    execute(message, args, commandName, client, Discord) {
        const user = message.mentions.users.first();
        if (!user){
            const CantSend = new MessageEmbed()
            .setColor("RANDOM")
            .setDescription("**Hãy tag một người nào đó để tán :D**")
            return message.channel.send({embeds: [CantSend]})
        }
        if (message.author === user) {
            const SendButNoone = new MessageEmbed()
            .setColor("RANDOM")
            .setDescription("**Bạn cần phải tán ai đó :>\nBạn không thể tự đánh chính mình**")
            return message.channel.send({embeds: [SendButNoone]})
            .then((sent) => {
                setTimeout(() => {
                    sent.delete();
                }, 5000);
            });
        }
        superagent.get('https://nekos.life/api/v2/img/slap')
            .end((err, response) => {
                const embed = new MessageEmbed()
                    .setTitle(`${user.username} vừa bị tán bởi ${message.author.username}`)
                    .setDescription("Ouch :)))")
                    .setFooter(`Đau đớn thay`)
                    .setImage(response.body.url)
                    .setURL(response.body.url)
                    .setColor("RANDOM")
                message.channel.send({embeds: [embed]});
            })
    }
}
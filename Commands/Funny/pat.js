const { MessageEmbed } = require('discord.js')
const superagent = require('superagent');

module.exports = {
    name: 'pat',
    aliases: [],
    category: 'Funny',
    utilisation: '{prefix}pat <username>',
    description: "pat someone",
    execute(message, args, commandName, client, Discord) {
        const user = message.mentions.users.first();
        if (!user){
            const CantSend = new MessageEmbed()
            .setColor("RANDOM")
            .setDescription("**Bạn cần một người nào đó để xoa đầu :D**")
            return message.channel.send({embeds: [CantSend]})
        }
        if (message.author === user) {
            const SendButNoone = new MessageEmbed()
            .setColor("RANDOM")
            .setDescription("**Bạn không thể tự xoa đầu chính mình**")
            return message.channel.send({embeds: [SendButNoone]})
            .then((sent) => {
                setTimeout(() => {
                    sent.delete();
                }, 5000);
            });
        }
        superagent.get('https://nekos.life/api/v2/img/pat')
            .end((err, response) => {
                const embed = new MessageEmbed()
                    .setTitle(`${message.author.username} xoa đầu ${user.username}`)
                    .setFooter(`Hey you :3 Do you like it ?`)
                    .setImage(response.body.url)
                    .setURL(response.body.url)
                    .setColor("RANDOM")
                message.channel.send({embeds: [embed]});
            })
    }
}
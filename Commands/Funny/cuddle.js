const { MessageEmbed } = require('discord.js')
const superagent = require('superagent');

module.exports = {
    name: 'cuddle',
    aliases: [],
    category: 'Funny',
    utilisation: '{prefix}cuddle <username>',
    description: "cuddle someone",
    execute(message, args, commandName, client, Discord) {
        const user = message.mentions.users.first();
        if (!user){
            const CantSend = new MessageEmbed()
            .setColor("RANDOM")
            .setDescription("**Hãy tag một người bạn nào đó để ôm :D**")
            return message.channel.send({embeds: [CantSend]})
        }
        if (message.author === user) {
            const SendButNoone = new MessageEmbed()
            .setColor("RANDOM")
            .setDescription("**Bạn không thể tự ôm chính mình :3**")
            return message.channel.send({embeds: [SendButNoone]})
            .then((sent) => {
                setTimeout(() => {
                    sent.delete();
                }, 5000);
            });
        }
        superagent.get('https://nekos.life/api/v2/img/cuddle')
            .end((err, response) => {
                const embed = new MessageEmbed()
                    .setTitle(`${message.author.username}  ôm nhẹ nhàng ${user.username}`)
                    .setFooter(`:3`)
                    .setImage(response.body.url)
                    .setURL(response.body.url)
                    .setColor("RANDOM")
                message.channel.send({embeds: [embed]});
            })
    }
}
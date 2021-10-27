const { MessageEmbed } = require('discord.js')
const superagent = require('superagent');

module.exports = {
    name: 'feed',
    aliases: [],
    category: 'Funny',
    utilisation: '{prefix}feed <username>',
    description: "feed someone",
    execute(message, args, commandName, client, Discord) {
        const user = message.mentions.users.first();
        if (!user){
            const CantSend = new MessageEmbed()
            .setColor("RANDOM")
            .setDescription("**Hãy tag một người bạn nào đó để cho họ ăn :D**")
            return message.channel.send({embeds: [CantSend]})
        }
        superagent.get('https://nekos.life/api/v2/img/feed')
            .end((err, response) => {
                const embed = new MessageEmbed()
                    .setTitle(`${message.author.username} đang cho ${user.username} ăn`)
                    .setFooter(`măm măm`)
                    .setImage(response.body.url)
                    .setURL(response.body.url)
                    .setColor("RANDOM")
                message.channel.send({embeds: [embed]});
            })
    }
}
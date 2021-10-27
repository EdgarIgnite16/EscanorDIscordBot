const { MessageEmbed } = require('discord.js')
const superagent = require('superagent');

module.exports = {
    name: 'poke',
    aliases: [],
    category: 'Funny',
    utilisation: '{prefix}poke <username>',
    description: "poke someone",
    execute(message, args, commandName, client, Discord) {
        const user = message.mentions.users.first();
        if (!user){
            const CantSend = new MessageEmbed()
            .setColor("RANDOM")
            .setDescription("**Hãy tag một người bạn nào đó để chọc họ :D**")
            return message.channel.send({embeds: [CantSend]})
        }
        superagent.get('https://nekos.life/api/v2/img/poke')
            .end((err, response) => {
                const embed = new MessageEmbed()
                    .setTitle(`${message.author.username} chọc ${user.username} :3`)
                    .setFooter(`ounch :>`)
                    .setImage(response.body.url)
                    .setURL(response.body.url)
                    .setColor("RANDOM")
                message.channel.send({embeds: [embed]});
            })
    }
}
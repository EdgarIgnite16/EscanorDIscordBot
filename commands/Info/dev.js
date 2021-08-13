const Discord = require('discord.js');
const {
    stripIndents
} = require("common-tags")

module.exports = {
    name: 'dev',
    aliases: [],
    category: 'Info',
    utilisation: '{prefix}dev',
    description: "get info developer this bot :>",
    async run(client, message) {
        const embed = new Discord.MessageEmbed()
            .setTitle("**Thông tin Developer**")
            .setColor("#2df7dc")
            .setDescription(stripIndents `**Thông tin cá nhân**
            **Discord tagname: ** Edgarr#0446
            **ID user: ** 709392910008713288
            **Tên Thật: ** Trần Nguyên Lộc
            **Sở thích: ** Thích làm loser :>
            **Github: **https://github.com/EdgarIgnite16
            **Discord Server: **https://discord.gg/47XNaf8Hep
            **Facebook: **https://www.facebook.com/edgawar.me.me/
            `)
            .setThumbnail("https://scontent.fhan2-4.fna.fbcdn.net/v/t1.6435-9/151065826_831597224350719_4345458488072486548_n.jpg?_nc_cat=100&ccb=1-3&_nc_sid=174925&_nc_ohc=O7bR5L92DpUAX_vMeiW&_nc_ht=scontent.fhan2-4.fna&oh=7c8e5a3818d8306d73318cfac292f405&oe=60EE3BFB")
        message.channel.send(embed)
    }
}
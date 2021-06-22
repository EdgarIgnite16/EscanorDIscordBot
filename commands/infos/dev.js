const Discord = require('discord.js');
const { stripIndents } = require("common-tags")
module.exports ={
    name:"developer",
    desciption:"edgarIT",
    async run(client,message){
        const embed = new Discord.MessageEmbed()
            .setTitle("**Thông tin Developer**")
            .setColor("#2df7dc")
            .setDescription(stripIndents`**Thông tin cá nhân**
            **Discord tagname: ** EdgarIgnite#0446
            **ID user: ** 709392910008713288
            **Tên Thật: ** Trần Nguyên Lộc
            **Sở thích: ** Thích làm loser :>
            **Github: ** https://github.com/EdgarIgnite16
            **Discord Server: ** https://discord.gg/47XNaf8Hep
            **Facebook: ** https://www.facebook.com/edgawar.me.me/
            `)
            .setThumbnail("https://scontent.fhan14-2.fna.fbcdn.net/v/t1.6435-9/151065826_831597224350719_4345458488072486548_n.jpg?_nc_cat=100&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=tBmQps1UAp0AX_S6pSv&_nc_ht=scontent.fhan14-2.fna&oh=e46ab43907e3b3ae6b07f90efeb64c1a&oe=60CE97FB")
        message.channel.send(embed)
    }
}
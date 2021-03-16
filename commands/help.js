const pagination = require('discord.js-pagination');
const Discord = require('discord.js');

module.exports = {
    name: "help",
    description: "The help command, what do you expect?",

    async run (client, message, args){

        //Sort your commands into categories, and make seperate embeds for each category
        const helpEmbed = new Discord.MessageEmbed().setTitle('Commands List').setColor('#27e2e8');
        helpEmbed
            .setDescription('Dùng Prefix `e!` + `<lệnh>` để gọi lệnh cho bot.' )
            .addField('`dms <NameTag><nội dung>`','là gửi tin nhắn ẩn danh cho một người nào đó.')
            .addField('`cfs <nội dung>`' ,'để gửi cfs ẩn danh vào sever(nhắn trực tiếp với bot).')
            .addField('`avatar <NameTag>`','gọi avatar người được chọn.')
            .addField('`math <giá trị>`','dùng để tính toán.')
            .addField('`say  <Channel><nội dung>`','dùng bot để chat ẩn.')
            .addField('`weather <tên vị trí>`' , 'kiểm tra thời tiết.')
            .addField('`ping`','Check Delay of Bot.')    
            .setFooter("✔ We are Loser Commands ✔")
            .setTimestamp()
        message.channel.send(helpEmbed);
    }
}
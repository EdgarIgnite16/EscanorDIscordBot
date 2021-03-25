const Discord = require('discord.js');
const { stripIndents } = require("common-tags");
module.exports = {
    name: "help",
    description: "The help command, what do you expect?",

    async run (client, message, args){

        //Sort your commands into categories, and make seperate embeds for each category
        const helpEmbed = new Discord.MessageEmbed()
        helpEmbed
            .setTitle('Commands List')
            .setColor('#27e2e8')
            .setDescription('Dùng Prefix `e!` + `<lệnh>` để gọi lệnh cho bot.' )
            .addField("---------------------------------------------", stripIndents`


            `)
            .setFooter("All You Need Here")
            .setTimestamp()
        message.channel.send(helpEmbed);
    }
}
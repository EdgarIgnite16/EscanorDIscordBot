const Discord = require("discord.js");

module.exports = {
    name: "iq",
    description: "Display a user IQ",
    async run(message){
    message.delete()
    const iq = Math.floor(Math.random() * 226);
    const embed = new Discord.MessageEmbed()
    .setTitle(":brain: IQ Test:")
    .setDescription(":bulb: " + message.author.username + " IQ: `" + iq + "`")
    .setColor(`RANDOM`)
    .setFooter("- User Call Bot: " + message.author.username)
    .setTimestamp()
    message.channel.send(embed).then((sent) => {
        setTimeout(() => {
            sent.delete();
        }, 60000);
    });
    
 
    }
}
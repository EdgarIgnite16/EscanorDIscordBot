const math = require('mathjs');
const { MessageEmbed } = require("discord.js");

module.exports = {
    name: 'math',
    aliases: [],
    category: 'Utilities',
    utilisation: '{prefix}math <content>',
    description: "For Math :> For Brain",
    execute(message, args, commandName, client, Discord) {
        let resp = 0;
        let FairValue = new MessageEmbed()
            .setColor("RED")
            .setDescription("Xin hãy nhập vào **giá trị** để tính toán !")
        if (!args[0]) {
            return message.channel.send({embeds: [FairValue]})
        }
        try {
            resp = math.evaluate(args.join(" "))
        } catch (e) {
            return message.channel.send({embeds: [FairValue]})
        }
        const TrueValue = new MessageEmbed()
            .setColor('GREEN')
            .setTitle('Calculator')
            .addField('Question', `\`\`\`css\n${args.join(' ')}\`\`\``)
            .addField('Answer', `\`\`\`css\n${resp}\`\`\``)
        message.channel.send({embeds: [ TrueValue ]});

    }
}
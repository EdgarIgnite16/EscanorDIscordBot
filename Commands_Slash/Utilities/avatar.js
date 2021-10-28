const { Client, CommandInteraction, MessageEmbed} = require('discord.js')

module.exports = {
    name: 'avatar',
    description: "get your face or get someone face",
    option: [
        {
            name: "target",
            description: "Select member to get picture avatar !",
            type: "USER",
            required: true
        },
    ],
    /**
     * @param {Client} client 
     * @param {CommandInteraction} interaction 
     */
    execute(client, interaction) {
        const Target = interaction.option.getUser('target');
        const response = new MessageEmbed()
            .setColor('RANDOM')
            .setAuthor(`${Target.tag}\'s Avatar`)
            .setImage(Target.displayAvatarURL({dynamic: true}))
            .setFooter(`Request By ${interaction.user.tag}`)
        interaction.followUp({embeds: [response]})
    }
}
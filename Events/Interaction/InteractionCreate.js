module.exports = {
    name: "interactionCreate",
    async exectue(client, interaction) {
        if(interaction.isCommand()){
            await interaction.deferReply({ ephemeral: false }).catch(() => {});

            const command = client.commands.get(interaction.commandName);
            if(!command) return interaction.followUp({ content: "Lệnh này không tồn tại !"}) && client.commands.delete(interaction.commandName);
            
            command.execute(client, interaction);
        }
    }
}
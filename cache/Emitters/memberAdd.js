const { MessageEmbed } = require('discord.js');
module.exports = {
    name: 'emitadd',
    category: 'Emitters',
    utilisation: '{prefix}emitadd',
    description: "Emit the guildMemberAdd event",
    permissions: "ADMINISTRATOR",
    execute(message, args, commandName, client, Discord) {
        client.emit("guildMemberAdd", message.member);
    }
};
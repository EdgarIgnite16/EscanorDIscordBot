const { MessageEmbed } = require('discord.js');
module.exports = {
    name: 'emitremove',
    category: 'Emitters',
    utilisation: '{prefix}emitremove',
    description: "Emit the guildMemberRemove event",
    permissions: "ADMINISTRATOR",
    execute(message, args, commandName, client, Discord) {
        client.emit("guildMemberRemove", message.member);
    }
};
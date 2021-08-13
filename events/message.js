const {
    prefix
} = require('../config/config.json');

module.exports = (client, message) => {
    if (message.author.bot) return;
    if (message.content.toLowerCase().startsWith(prefix)) {
        const args = message.content.slice(prefix.length).trim().split(/ +/g);
        const command = args.shift().toLowerCase();
        const cmd = client.commands.get(command) || client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(command));
        try {
            cmd.run(client, message, args);
        } catch (error) {
            console.error(error);
        }
    }
}
const { prefix } = require('../../config/config.json');
module.exports = {
    name: 'help',
    aliases: ['h'],
    category: 'infos',
    utilisation: '{prefix}help <command name>',
    description: "Help Commands",
    async run(client, message, args) {
        if (!args[0]) {
            const Animal = message.client.commands.filter(x => x.category == 'Animal').map((x) => '`' + x.name + '`').join(', ');
            const Fun = message.client.commands.filter(x => x.category == 'Fun').map((x) => '`' + x.name + '`').join(', ');
            const Moderator = message.client.commands.filter(x => x.category == 'Moderator').map((x) => '`' + x.name + '`').join(', ');
            const Feature = message.client.commands.filter(x => x.category == 'Feature').map((x) => '`' + x.name + '`').join(', ');
            const Music = message.client.commands.filter(x => x.category == 'Music').map((x) => '`' + x.name + '`').join(', ');
            const NSFW = message.client.commands.filter(x => x.category == 'NSFW').map((x) => '`' + x.name + '`').join(', ');
            message.channel.send({
                embed: {
                    color: 'GREEN',
                    author: { name: 'Help Commands!' },
                    footer: { text: 'List Commands' },
                    fields: [
                        { name: '🐶 Animal', value: Animal },
                        { name: '🎆 Fun', value: Fun },
                        { name: '🔐 Moderator', value: Moderator },
                        { name: '🧾 Feature', value: Feature },
                        { name: '🎶 Music', value: Music },
                        { name: '⚠️ NSFW', value: NSFW },
                    ],
                    timestamp: new Date(),
                    description: "Type Prefix `e! + <command>` to use **Commands**",
                },
            });
        } else {
            const command = message.client.commands.get(args.join(" ").toLowerCase()) || message.client.commands.find(x => x.aliases && x.aliases.includes(args.join(" ").toLowerCase()));

            if (!command) return message.channel.send(`${client.emotes.error} - I did not find this command !`);

            message.channel.send({
                embed: {
                    color: 'ORANGE',
                    author: { name: 'Help Pannel' },
                    footer: { text: 'Command Utilisation' },
                    fields: [
                        { name: '🧾 Name', value: command.name, inline: true },
                        { name: '🧾 Category', value: command.category, inline: true },
                        { name: '🧾 Aliase(s)', value: command.aliases.length < 1 ? 'None' : command.aliases.join(', '), inline: true },
                        { name: '🧾 Utilisation', value: command.utilisation.replace('{prefix}', prefix), inline: true },
                        { name: '🧾 Description', value: command.description, inline: false },
                    ],
                    timestamp: new Date(),
                    description: 'Find information on the command provided.\nMandatory arguments `[]`, optional arguments `<>`.',
                }
            });
        };
    },
};
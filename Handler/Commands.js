const { readdirSync } = require('fs');

module.exports = (client , Discord) => {
    const commandFolders = readdirSync('./Commands');
    for(const folder of commandFolders) {
        const conmmandFiles = readdirSync(`./Commands/${folder}`).filter(files => files.endsWith('.js'));
        for(const file of conmmandFiles) {
            const command = require(`../Commands/${folder}/${file}`);
            console.log(`Loading command ${file}`); // option
            client.commands.set(command.name, command);
        };
    };
};
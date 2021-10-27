const { readdirSync } = require('fs');

module.exports = (client , Discord) => {
    const commandFolders = readdirSync('./Commands_Slash');
    for(const folder of commandFolders) {
        const conmmandFiles = readdirSync(`./Commands_Slash/${folder}`).filter(files => files.endsWith('.js'));
        const commandsArray = [];
        for(const file of conmmandFiles) {
            const command = require(`../Commands_Slash/${folder}/${file}`);
            console.log(`Loading command ${file}`); // option
            client.commands.set(command.name, command);
            commandsArray.push(command);

            client.on("ready", () => {
                client.guilds.cache.get("845223199015960586").commands.set(commandsArray);
            });
        };
    };
};
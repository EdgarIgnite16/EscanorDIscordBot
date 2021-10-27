module.exports = {
    name: "ready",
    execute(client) {
        console.log(`Logged in as ${client.user.username}\nReady on ${client.guilds.cache.size} servers\nFor a total of ${client.users.cache.size} users`);
        console.log(`${client.user.username} is ready to Burnnnnn !`);
        client.user.setActivity('Testing time', {type: 'WATCHING'});
    }
};
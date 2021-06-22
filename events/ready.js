module.exports = {
    name: 'ready',
    once: true,
    execute(client){
        console.log(`Logged in as ${client.user.username}. Ready on ${client.guilds.cache.size} servers, for a total of ${client.users.cache.size} users`);
        console.log(`${client.user.username} is ready to Burnnnnn !`);
        client.user.setActivity('e!help');
    }
}
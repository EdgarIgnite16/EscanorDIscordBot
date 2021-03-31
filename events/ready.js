module.exports = {
    name: 'ready',
    once: true,
    execute(client){
        console.log(`${client.user.username} is ready to Burnnnnn !`);
        client.user.setActivity('Powah of The Sun');
    }
}
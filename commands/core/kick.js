const Discord = require('discord.js');
module.exports = {

    name: 'kick',
    aliases: [],
    category: 'moderator',
    utilisation: '{prefix}kick',

    execute(client , message , args ){
        if (message.member.hasPermission("KICK_MEMBERS")) {
            let mentioned = message.mentions.members.first();
            let reason = args.slice(1).join(' ');
    
            if (!mentioned)
                return message.channel.send({embed: {
                    color: 16734039,
                    description: "Mention a valid member!"
                }})
                .then((message) =>{
                    setTimeout(() =>{
                        message.delete();
                    }, 10000);
                   });
            if (!mentioned.kickable)
                return message.channel.send({embed: {
                    color: 16734039,
                    description: "You cannot kick this member!"
                }}).then((message) =>{
                    setTimeout(() =>{
                        message.delete();
                    }, 10000);
                   });
            if (message.author === mentioned) {
               return message.channel.send({embed: {
                    color: 16734039,
                    description: "You cant kick yourself!"
                }}).then((message) =>{
                    setTimeout(() =>{
                        message.delete();
                    }, 10000);
                   });
            }
            if (!reason)
                reason = "No reason provided!".then((message) =>{
                    setTimeout(() =>{
                        message.delete();
                    }, 10000);
                   });
            
            mentioned.kick(reason);
            message.channel.send({embed: {
                color: 16734039,
                description: ":arrow_right: " + mentioned.displayName + " has been Kicked! :door:"
            }});     
        } else {
        message.channel.send({embed: {
                        color: 16734039,
                        description: "You don't have premission to kick members!"
                    }})
        }
    }
}
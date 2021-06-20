const Discord = require('discord.js');
module.exports = {

    name: 'ban',
    aliases: [],
    category: 'moderator',
    utilisation: '{prefix}ban',
    
    execute(client , message , args ){
        if (message.member.hasPermission("BAN_MEMBERS")) {
            let mentioned = message.mentions.members.first();
            let reason = args.slice(1).join(' ');
    
            if (!mentioned)
                return message.channel.send({embed: {
                    color: 16734039,
                    description: "Mention a valid member!"
                }}).then((message) =>{
                    setTimeout(() =>{
                        message.delete();
                    }, 10000);
                   });
            if (!mentioned.bannable)
                return message.channel.send({embed: {
                    color: 16734039,
                    description: "You cannot ban this member!"
                }}).then((message) =>{
                    setTimeout(() =>{
                        message.delete();
                    }, 10000);
                   });
                
            if (message.author === mentioned) {
               return message.channel.send({embed: {
                    color: 16734039,
                    description: "You can't ban yourself!"
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
            
            mentioned.ban(reason);
            message.channel.send({embed: {
                color: 3447003,
                title: ":scream: " + mentioned.displayName + " has been Banned! :scream:"
            }});     
        }else{
            message.reply('bạn không có quyền thực thi lệnh này');
        }
    },
}
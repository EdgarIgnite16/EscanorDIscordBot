const Discord = require("discord.js");
module.exports = {
    name: 'unmute',
    aliases: [],
    category: 'Moderator',
    utilisation: '{prefix}unmute <username>',
    description: "Using power or GOD to unmute member",
    async run(client, message, args){
        if (message.member.hasPermission('"MANAGE_MESSAGES')) {
            message.delete();
            const role = message.guild.roles.cache.find(role => role.name === 'Muted');
            let member = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[0]));
            if(member) {
                let check = member.roles.cache.find(guild => guild.name === 'Muted');
                if(!check){
                return message.channel.send({
                    embed: {
                    color:  5767167,
                    description: "người này không có mặt trong tù !"
                 }
                })
            }else{
                member.roles.remove(role);
                message.channel.send({
                embed: {
                    color:  5767167,
                    description: `Đã thả ${member} ra khỏi tù !`
                }
              })
            }
            }else {
                message.channel.send({
                    embed: {
                        color:  5767167,
                        description: "Không tìm thấy người dùng !"
                    }
                  })
            }

        } else {
            await message.channel.send({
                embed: {
                    color:  5767167,
                    description: "bạn không có quyền thực thi lệnh này !"
                  }
              }).then((sent) => {
                  setTimeout(() => {
                      sent.delete();
                  }, 15000);
              });
        }
    }
}
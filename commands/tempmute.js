const Discord = require("discord.js");
const { Logchannel } = require('../config.json');
const ms = require("ms");

module.exports = {
    name: "tempmute",
    description: "tempmute a member",

    async run (client, message, args){

        //e!tempmute @user 1s/m/h/d

        let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[0]));
        
        
        if(!tomute) return message.reply("Không tìm thấy người dùng.");
        if(tomute.hasPermission("MANAGE_MESSAGES")) return message.reply("Nó quá mạnh không thể làm gì được");
        let muterole = message.guild.roles.cache.find(guild => guild.name === 'Muted');
        //start of create role
        if(!muterole){
          try{
            muterole = await message.guild.cache.createRole({
              name: "Muted",
              color: "#000000",
              permissions:[]
            })
            message.guild.channels.forEach(async (channel, id) => {
              await channel.overwritePermissions(muterole, {
                SEND_MESSAGES: false,
                ADD_REACTIONS: false
              });
            });
          }catch(e){
            console.log(e.stack);
          }
        }
        //end of create role
        let mutetime = args[1];
        if(!mutetime) return message.reply("Bạn chưa nhập thời gian 😐😐😐");
        
        await(tomute.roles.add(muterole.id));
        message.channel.send(`<@${tomute.id}> đã bị câm nín bởi `+`**${message.member.displayName}**`+` 🤬🤬 \n<@${tomute.id}> ơi ! Bạn sẽ sớm được thả thôi ahihi !`);
        

    
        setTimeout(function(){
          tomute.roles.remove(muterole.id);
          message.channel.send(` 🎉Xin Chúc Mừng <@${tomute.id}> đã được thả tự do !🎉`);
        }, ms(mutetime));
      
      //end of module
    }
}

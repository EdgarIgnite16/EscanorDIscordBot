const Discord = require("discord.js");
const { Logchannel } = require('../config.json');
const ms = require("ms");
const { re } = require("mathjs");

module.exports = {
    name: "tempmute",
    description: "tempmute a member",

    async run (client, message, args){
        //e!tempmute @user 1s/m/h/d
        if (message.member.hasPermission("MANAGE_MESSAGES")){
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
        
        let mutetime = args[1];
        if(!mutetime){
          await message.channel.send({
            embed: {
                color:  5767167,
                description: "Bạn chưa nhập thời gian để mute !"
            }
        }).then((sent) => {
          setTimeout(() => {
              sent.delete();
          }, 15000);
      });
        }else{
          let reason = args.slice(2).join(" ");
          if(!reason){
          await message.channel.send({
            embed: {
                color:  5767167,
                description: "Bạn chưa nhập lí do để mute !"
            }
        }).then((sent) => {
          setTimeout(() => {
              sent.delete();
          }, 15000);
        });
        }else{
          await(tomute.roles.add(muterole.id));
          const embed = new Discord.MessageEmbed()
            .setTitle(`**Tòa án tối cao tuyên bố**`)
            .setThumbnail(tomute.user.displayAvatarURL())
            .setDescription(`<@${tomute.id}> đã bị còng tay `)
            .setColor("#f5142a")
            .addField(`**Lý do: **`, reason , true )
            .addField(`**Thời gian: **`, mutetime, true)
            .addField("**Roles :**",`${tomute.roles.cache.map(role => role.toString()).join(' ')}`)
            .setFooter(`người thi hành án ` + message.author.username)
            .setTimestamp();
          message.channel.send(embed);  
        }

        setTimeout(function(){ 
          tomute.roles.remove(muterole.id);
          message.channel.send({
            embed: {
                color:  5767167,
                description: `**Xin chúc mừng <@${tomute.id}>**\nBạn đã được thả sau ${mutetime} ngồi tù !`
            }
        })
        }, ms(mutetime));
      }
    }else{
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

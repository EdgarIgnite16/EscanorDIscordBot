const { Client, MessageEmbed, Message } = require("discord.js");
const ms = require("ms");

module.exports = {
  name: 'tempmute',
  aliases: ['camnin'],
  category: 'Moderator',
  utilisation: '{prefix}tempmute <@username> <time> [reason]',
  description: "Using power or GOD to temp mute member",
  permissions: "MANAGE_MESSAGES",
  execute(message, args, commandName, client, Discord) {
    //e!tempmute @user 1s/m/h/d
      
      const member = message.mentions.users.first();
      const mutetime = args[1];
      let reason = args.slice(2).join(" ");
      const muterole = message.guild.roles.cache.find(role => role.name === 'Muted');

     // find user
    if (!member) {
      const CantMute = new MessageEmbed()
        .setColor("RED")
        .setFooter("Cách sử dụng: {prefix}tempmute <@username> <time> [reason]")
        .setDescription("Không tìm thấy đối tượng để tempmute !\nBạn phải dùng **<@username>** để thực thi")
      return message.channel.send({embeds: [CantMute]})
      .then((sent) => {
        setTimeout(() => {
          sent.delete();
        }, 10000);
      });
    }

    // can not mute yourself 
    if(member.id  === message.author.id) {
      const YouDumb = new MessageEmbed()
      .setColor("RED")
      .setFooter("Cách sử dụng: {prefix}tempmute <@username> <time> [reason]")
      .setDescription("Bạn không thể tự mute chính mình !")
      return message.channel.send({embeds: [YouDumb]})
      .then((sent) => {
        setTimeout(() => {
          sent.delete();
        }, 10000);
      });
    }

    // can not mute ME :)))
    if(member.id  === '806542996166017135') {
      const HeyYou = new MessageEmbed()
      .setColor("RED")
      .setFooter("Cách sử dụng: {prefix}tempmute <@username> <time> [reason]")
      .setDescription("Bạn không thể tự mute tôi :< ")
      return message.channel.send({embeds: [HeyYou]})
      .then((sent) => {
        setTimeout(() => {
          sent.delete();
        }, 10000);
      });
    }
    
    // check they power
    if (member.permissions.has("MANAGE_MESSAGES")) {
      const CantMute = new MessageEmbed()
        .setColor("RED")
        .setFooter("Cách sử dụng: {prefix}tempmute <@username> <time> [reason]")
        .setDescription("Sức mạnh của người này vượt quá hoặc bằng quyền hạn của bạn.\nCho nên bạn không thể mute người này !")
      return message.channel.send({embeds: [CantMute]})
      .then((sent) => {
        setTimeout(() => {
          sent.delete();
        }, 10000);
      });
    }
    
    // start of create role
    if (!muterole) {
      try {
        muterole = message.guild.roles.create({
            name: "Muted",
            color: "#000000",
            permissions: [],
        });

        message.guild.channels.cache.filter(c => c.type === 'text').forEach(async (channel, id) => {
          channel.createOverwrite(muterole, {
            SEND_MESSAGES: false,
            ADD_REACTIONS: false
          });
        });
      } catch (e) {
        console.log(e.stack);
      }
    }

    //check role Mute
    if(member.roles.cache.some(role => role.name === 'Muted')) {
      const CantSendMute = new MessageEmbed()
        .setColor("RED")
        .setFooter("Cách sử dụng: {prefix}tempmute <@username> <time> [reason]")
        .setDescription("người này đã có mặt trong tù !")
      return message.channel.send({embeds: [CantSendMute]})
      .then((sent) => {
        setTimeout(() => {
          sent.delete();
        }, 10000);
      });
    }

    //check role highest position
    if (member.roles.highest.position >= message.member.roles.highest.position) {
      const CantSendMute2 = new MessageEmbed()
      .setColor("RED")
      .setFooter("Cách sử dụng: {prefix}tempmute <@username> <time> [reason]")
      .setDescription("Bạn không thể tống người này vào tù !")
      return message.channel.send({embeds: [CantSendMute2]})
      .then((sent) => {
        setTimeout(() => {
          sent.delete();
        }, 10000);
      });
    }

    //check time input
    if (!mutetime) {
      const WhenYouForgotTime = new MessageEmbed()
      .setColor("RED")
      .setFooter("Cách sử dụng: {prefix}tempmute <@username> <time> [reason]")
      .setDescription("Bạn chưa nhập thời gian để mute !")
      return message.channel.send({embeds: [WhenYouForgotTime]})
      .then((sent) => {
        setTimeout(() => {
          sent.delete();
        }, 10000);
      });
    }

    //check reason input
    // if (!reason) {
    //   const WhenYouForgotReason = new MessageEmbed()
    //   .setColor("RED")
    //   .setFooter("Cách sử dụng: {prefix}tempmute <@username> <time> [reason]")
    //   .setDescription("Bạn chưa nhập lí do để mute !")
    //   return message.channel.send({embeds: [WhenYouForgotReason]})
    //   .then((sent) => {
    //     setTimeout(() => {
    //       sent.delete();
    //     }, 10000);
    //   });
    // }

    //empty reason
    if (reason === "") {
      reason = "không có";
    }

    // started mute user
    member.roles.add(muterole);
    const embed = new MessageEmbed()
      .setColor("#f5142a")
      .setTitle(`**Tòa án tối cao tuyên bố**`)
      .setThumbnail(member.user.displayAvatarURL())
      .setDescription(`<@${member.id}> đã bị tạm giam trong ${ms(ms(mutetime))} giây !`)
      .addField(`**Lý do: **`, reason, true)
      .addField(`**Thời gian: **`, mutetime, true)
      .addField("**Roles :**", `${member.roles.cache.map(role => role.toString()).join(' ').replace("@everyone", " ")}`)
      .setFooter(`người thi hành án ` + message.author.username)
      .setTimestamp();
    message.channel.send({embeds: [embed]})
    .then((sent) => {
      setTimeout(() => {
        sent.delete();
          }, 60000);
      });
    
    setTimeout(function () {
      member.roles.remove(muterole)
      const RemoveRoleMuted = new MessageEmbed()
      .setColor("GREEN")
      .setDescription(`**Xin chúc mừng <@${member.id}>**\nBạn đã được thả sau ${ms(ms(mutetime))} ngồi tù !`)
      return message.channel.send({embeds: [RemoveRoleMuted]})
      .then((sent) => {
        setTimeout(() => {
          sent.delete();
            }, 60000);
        });
      }, ms(mutetime));
  }
}

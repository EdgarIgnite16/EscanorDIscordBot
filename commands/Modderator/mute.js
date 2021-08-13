const Discord = require("discord.js");

module.exports = {
  name: 'mute',
  aliases: [],
  category: 'Moderator',
  utilisation: '{prefix}mute <username>',
  description: "Using power or GOD to mute member",
  async run(client, message, args) {
    //e!tempmute @user 1s/m/h/d
    message.delete();
    if (message.member.hasPermission("MANAGE_MESSAGES")) {
      let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[0]));
      if (!tomute) return message.reply("Không tìm thấy người dùng.");
      if (tomute.hasPermission("MANAGE_MESSAGES")) return message.reply("Nó quá mạnh không thể làm gì được");
      let muterole = message.guild.roles.cache.find(guild => guild.name === 'Muted');
      //start of create role
      if (!muterole) {
        try {
          muterole = await message.guild.cache.createRole({
            name: "Muted",
            color: "#000000",
            permissions: []
          })
          message.guild.channels.forEach(async (channel, id) => {
            await channel.overwritePermissions(muterole, {
              SEND_MESSAGES: false,
              ADD_REACTIONS: false
            });
          });
        } catch (e) {
          console.log(e.stack);
        }
      }
      // check role Mute
      let check = tomute.roles.cache.find(guild => guild.name === 'Muted');
      if (check) {
        return message.channel.send({
          embed: {
            color: 5767167,
            description: "người này đã có mặt trong tù !"
          }
        }).then((sent) => {
          setTimeout(() => {
            sent.delete();
          }, 10000);
        });
      } else {
        let reason = await args.slice(1).join(" ");
        if (reason === "") {
          reason = "không có";
        }
        await (tomute.roles.add(muterole.id));
        const embed = new Discord.MessageEmbed()
          .setColor("#f5142a")
          .setTitle(`**Tòa án tối cao tuyên bố**`)
          .setThumbnail(tomute.user.displayAvatarURL())
          .setDescription(`<@${tomute.id}> đối mặt với án tù chung thân`)
          .addField("**Roles :**", `${tomute.roles.cache.map(role => role.toString()).join(' ')}`)
          .addField(`**Lý do: **`, reason, true)
          .setFooter(`người thi hành án ` + message.author.username)
          .setTimestamp();
        message.channel.send(embed);
      }
    } else {
      await message.channel.send({
        embed: {
          color: 5767167,
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

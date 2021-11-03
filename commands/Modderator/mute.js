const {Client, MessageEmbed, Message} = require("discord.js");

module.exports = {
  name: 'mute',
  aliases: ['shutup'],
  category: 'Moderator',
  utilisation: '{prefix}tempmute <@username> [reason]',
  description: "Using power or GOD to mute member",
  permissions: "MANAGE_MESSAGES",
  /** 
   * @param {Client} client 
   * @param {Message} message 
   * @param {String[]} args 
   */
  execute(message, args, commandName, client, Discord) {
    message.delete();
    const member = message.mentions.users.first();
    let reason = args.slice(1).join(" ");
    let muterole = message.guild.roles.cache.find(role => role.name === 'Muted');

    //empty reason
    if (reason === "") {
      reason = "không có";
    }

    // find user
    if (!member) {
      const CantMute = new MessageEmbed()
        .setColor("RED")
        .setFooter("Cách sử dụng: {prefix}mute <@username> [reason]")
        .setDescription("Không tìm thấy đối tượng để mute !\nBạn phải dùng **@<username>** để thực thi")
      return message.channel.send({
          embeds: [CantMute]
        })
        .then((sent) => {
          setTimeout(() => {
            sent.delete();
          }, 10000);
        });
    }

    // can not mute yourself 
    if (member.id === message.author.id) {
      const YouDumb = new MessageEmbed()
        .setColor("RED")
        .setFooter("Cách sử dụng: {prefix}mute <@username> [reason]")
        .setDescription("Bạn không thể tự mute chính mình !")
      return message.channel.send({
          embeds: [YouDumb]
        })
        .then((sent) => {
          setTimeout(() => {
            sent.delete();
          }, 10000);
        });
    }

    // can not mute ME :)))
    if (member.id === '806542996166017135') {
      const HeyYou = new MessageEmbed()
        .setColor("RED")
        .setFooter("Cách sử dụng: {prefix}mute <@username> [reason]")
        .setDescription("Bạn không thể tự mute tôi :< ")
      return message.channel.send({
          embeds: [HeyYou]
        })
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
        .setFooter("Cách sử dụng: {prefix}mute <@username> [reason]")
        .setDescription("Sức mạnh của người này vượt quá hoặc bằng quyền hạn của bạn.\nCho nên bạn không thể mute người này !")
      return message.channel.send({
          embeds: [CantMute]
        })
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
    if (member.roles.cache.some(role => role.name === 'Muted')) {
      const CantSendMute = new MessageEmbed()
        .setColor("RED")
        .setFooter("Cách sử dụng: {prefix}mute <@username> [reason]")
        .setDescription("người này đã có mặt trong tù !")
      return message.channel.send({
          embeds: [CantSendMute]
        })
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
        .setFooter("Cách sử dụng: {prefix}mute <@username> [reason]")
        .setDescription("Bạn không thể tống người này vào tù !")
      return message.channel.send({
          embeds: [CantSendMute2]
        })
        .then((sent) => {
          setTimeout(() => {
            sent.delete();
          }, 10000);
        });
    }

    // started mute user
    member.roles.add(muterole);
    const embed = new MessageEmbed()
      .setColor("#f5142a")
      .setTitle(`**Tòa án tối cao tuyên bố**`)
      .setThumbnail(member.user.displayAvatarURL())
      .setDescription(`<@${member.id}> nhận mức án tù chung thân`)
      .addField(`**Lý do: **`, reason, true)
      .addField("**Roles :**", `${member.roles.cache.map(role => role.toString()).join(' ').replace("@everyone", " ")}`, true)
      .setFooter(`người thi hành án ` + message.author.username)
      .setTimestamp();
    message.channel.send({embeds: [embed]})
      .then((sent) => {
        setTimeout(() => {
          sent.delete();
        }, 60000);
      });
  }
}
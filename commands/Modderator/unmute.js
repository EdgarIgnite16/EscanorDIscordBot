const { Client, MessageEmbed, Message } = require("discord.js");

module.exports = {
    name: 'unmute',
    aliases: [],
    category: 'Moderator',
    utilisation: '{prefix}unmute <username>',
    description: "Using power or GOD to unmute member",
    permissions: 'MANAGE_MESSAGES',
    /** 
     * @param {Client} client 
     * @param {Message} message 
     * @param {String[]} args 
     */
    execute(message, args, commandName, client, Discord) {
        message.delete();
        const member = message.mentions.users.first();
        // let target = message.guild.members.cache.get(member.id)
        let muterole = message.guild.roles.cache.find(role => role.name === 'Muted');

        if (!member) {
            const CantMute = new MessageEmbed()
              .setColor("RED")
              .setFooter("Cách sử dụng: {prefix}unmute <@username>")
              .setDescription("Không tìm thấy đối tượng để unmute !\nBạn phải dùng **@<username>** để thực thi")
            return message.channel.send({embeds: [CantMute]})
            .then((sent) => {
              setTimeout(() => {
                sent.delete();
              }, 10000);
            });
        }

        if(!member.roles.cache.some(role => role.name === 'Muted')) {
            const CantSendMute = new MessageEmbed()
              .setColor("RED")
              .setFooter("Cách sử dụng: {prefix}unmute <@username>")
              .setDescription("người này không có mặt trong ngục !")
            return message.channel.send({embeds: [CantSendMute]})
            .then((sent) => {
              setTimeout(() => {
                sent.delete();
              }, 10000);
            });
          }

        member.roles.remove(muterole);
        // target.roles.remove(muterole.id);
          let embed = new MessageEmbed()
          .setColor("RANDOM")
          .setDescription(`${member} đã được ân xá !`)
        return message.channel.send({embeds: [embed]})
        .then((sent) => {
            setTimeout(() => {
              sent.delete();
            }, 10000);
          });
    }
}
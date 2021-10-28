const { MessageEmbed } = require("discord.js");
const { LogLeaveChannelTest } = require("../../config.json");

module.exports = {
    name:"guildMemberRemove",
    execute(member) {
        const LeaveEmbed = new MessageEmbed()
        .setColor('RED')
        .setAuthor('Đã đi xa !', member.user.displayAvatarURL({ dynamic: true}))
        .setDescription(`${member} đã rời khỏi **${member.guild.name}**`)
        .setFooter(`Vậy chỉ còn **${member.guild.memberCount}** thành viên còn lại trong server !`, member.user.displayAvatarURL({dynamic: true}))
        .setTimestamp()
        member.guild.channels.cache.get(LogLeaveChannelTest).send({ embeds: [LeaveEmbed] });
    }
}
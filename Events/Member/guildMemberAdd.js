const { MessageEmbed } = require("discord.js");
const { WelcomeChannelTest } = require("../../Config/config.json");
const { LogWelcomeChannelTest } = require("../../Config/config.json");

module.exports = {
    name:"guildMemberAdd",
    execute(member) {
        // const MemberRole = member.guild.roles.cache.get('893021422006468668');
        // member.roles.add(MemberRole);
        const WelcomeEmbed = new MessageEmbed()
        .setColor('RANDOM')
        .setAuthor('Hế nhô xin chào bạn ! Welcome to Ourhome :3', member.user.displayAvatarURL({ dynamic: true}))
        .setDescription(`${member} đã đến với **${member.guild.name}**\nChúc bạn có một ngày tốt lành :3`)
        .setFooter(`${member.user.tag} là thành viên thứ **${member.guild.memberCount}** của server`, member.user.displayAvatarURL({dynamic: true}))
        .setTimestamp()
        member.guild.channels.cache.get(WelcomeChannelTest).send({ embeds: [WelcomeEmbed] });

        const GetLogEmbed = new MessageEmbed()
        .setColor("RANDOM")
        .setAuthor('Log Change', member.user.displayAvatarURL({ dynamic: true }))
        .setDescription(`${member} đã tham gia server !\nLastest Member Count: **${member.guild.memberCount}**`)
        .setTimestamp()
        member.guild.channels.cache.get(LogWelcomeChannelTest).send({ embeds: [GetLogEmbed] });
    }
};
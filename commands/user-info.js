const Discord = require("discord.js")
module.exports = {
    name: "user-info",
    desciption: "get infos of user",


  async  run(client, message, args) {
       
        //check if more than 1 user is mentioned
        if (args.length > 1) return message.channel.send('Only mention one user!').then((sent) => {
            setTimeout(() => {
                sent.delete();
            }, 5000);
        });

        //check if there is no arguments
        if (!args[0]) return message.channel.send('Mention someone!').then((sent) => {
            setTimeout(() => {
                sent.delete();
            }, 5000);
        });
        
        //check if there is 1 argument
        if (args[0]) {
            //get the first user mentioned
            let member = message.mentions.members.first()
            message.delete();
            //if the member exists create an embed with info about that user and send it to the channel
            if (member) {
                let embed = new Discord.MessageEmbed()
                    .setColor("RANDOM")
                    .setTitle("**🧾 User Info Command 🧾**")
                    .setDescription("**All information about **`"+ `${member.displayName}` + "`** is here !**" )
                    .setThumbnail(member.user.displayAvatarURL())
                    .addField("**Username:**", `${member.user.username}`, true)
                    .addField("**Discriminator:**", `#${member.user.discriminator}`, true)
                    .addField("**ID:**", `${member.user.id}`, true)
                    .addField("**Joined On:**", `${member.joinedAt.toLocaleString()}`, true)
                    .addField("**Created On:**", `${member.user.createdAt.toLocaleString()}`, true)
                    .addField("**Permission:**",`${member.roles.cache.map(role => role.toString()).join(' ')}`)
                    .setFooter("User Call Bot: " + message.author.username)
                    .setTimestamp()

                message.channel.send(embed);
            } else {
                message.channel.send(`Could not find that member`).then((sent) => {
                    setTimeout(() => {
                        sent.delete();
                    }, 5000);
                });
            }
        }
    }
}
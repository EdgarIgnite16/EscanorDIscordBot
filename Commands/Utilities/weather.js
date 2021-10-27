const weather = require('weather-js');
const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'weather',
    aliases: ['wt'],
    category: 'Utilities',
    utilisation: '{prefix}weather, {prefix}wt',
    description: "weather infomation",
    execute(message, args, commandName, client, Discord) {
        weather.find({
            search: args.join(" "),
            degreeType: 'C'
        }, function (error, result) {
            // 'C' can be changed to 'F' for farneheit results
            if (!args[0]) {
                let ErrorFunction = new MessageEmbed()
                    .setColor("RED")
                    .setDescription('xin hãy nhập vị trí !')
                return message.channel.send({ embeds: [ErrorFunction] })
                .then((sent) => {
                    setTimeout(() => {
                        sent.delete();
                    }, 5000);
                });
            }

            if (result === undefined || result.length === 0) {
                let ErrorFunction = new MessageEmbed()
                    .setColor("RED")
                    .setDescription('Không tìm thấy vị trí !')
                return message.channel.send({ embeds: [ErrorFunction] })
                    .then((sent) => {
                        setTimeout(() => {
                            sent.delete();
                        }, 3000);
                    });
            }

            var current = result[0].current;
            var location = result[0].location;
            const weatherinfo = new MessageEmbed()
                .setDescription(`**${current.skytext}**`)
                .setAuthor(`Weather forecast for ${current.observationpoint}`)
                .setThumbnail(current.imageUrl)
                .setColor(0x111111)
                .addField('Timezone', `UTC${location.timezone}`, true)
                .addField('Degree Type', 'Celsius', true)
                .addField('Temperature', `${current.temperature}°`, true)
                .addField('Wind', current.winddisplay, true)
                .addField('Feels like', `${current.feelslike}°`, true)
                .addField('Humidity', `${current.humidity}%`, true)
            message.channel.send({ embeds: [weatherinfo]})
        })
    }
}
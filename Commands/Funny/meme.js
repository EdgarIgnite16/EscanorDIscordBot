const randomPuppy = require('random-puppy');
const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'meme',
    aliases: [],
    category: 'Funny',
    utilisation: '{prefix}meme',
    description: "Give a meme",
    execute(message, args, commandName, client, Discord) {
        let reddit = [
            "meme",
            "animemes",
            "MemesOfAnime",
            "animememes",
            "AnimeFunny",
            "dankmemes",
            "dankmeme",
            "wholesomememes",
            "MemeEconomy",
            "techsupportanimals",
            "meirl",
            "me_irl",
            "2meirl4meirl",
            "AdviceAnimals"
        ]

        let subreddit = reddit[Math.floor(Math.random() * reddit.length)];
        randomPuppy(subreddit).then(async url => {
            message.channel.send({
                files: [{
                    attachment: url,
                    name: 'meme.png'
                }]
            })
        }).catch((err) => {
            const embed = new MessageEmbed()
            .setColor("RED")
            .setDescription("Có gì đó sai sai :<")
            return message.channel.send ({embeds: [embed]})
        });
    }
}
const Discord = require("discord.js");
const malScraper = require('mal-scraper');

module.exports  = {
    name: "search",
    description: "Search for anime",
    async run(message,client,args){
        const search = `${args}`;
        message.delete()
        malScraper.getInfoFromName(search)
          .then((data) => {
          const malEmbed = new Discord.MessageEmbed()
            .setAuthor(`My Anime List search result for ${args}`.split(',').join(' '))
            .setThumbnail(data.picture)
            .setColor("RANDOM")
            .addField('English Title', data.englishTitle)
            .addField('Japanese Title', data.japaneseTitle)
            .addField('Type', data.type)
            .addField('Episodes', data.episodes)
            .addField('Rating', data.rating)
            .addField('Aired', data.aired)
            .addField('Score', data.score)
            .addField('Score Stats', data.scoreStats)
            .addField('Link', data.url)
            .setTimestamp()
            .setFooter("User Call Bot: " + message.author.username)
            message.channel.send(malEmbed);
      
          })
    }
}
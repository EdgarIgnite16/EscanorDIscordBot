const { MessageEmbed } = require('discord.js');
const malScraper = require('mal-scraper');

module.exports = {
  name: 'search-anime',
  aliases: [],
  category: 'Utilities',
  utilisation: '{prefix}search-anime <name anime>',
  description: "Search Anime going to here form Google bla bla",
  execute(message, args, commandName, client, Discord) {
    const search = `${args}`;
    if(search.length === 0){
      const ErrorEmbed = new MessageEmbed()
      .setColor("RED")
      .setDescription("Vui lòng nhập tên bộ Anime cần tìm !")
      return message.channel.send({embeds: [ErrorEmbed]})
      .then((sent) => {
        setTimeout(() => {
            sent.delete();
        }, 10000);
    });
    }
    malScraper.getInfoFromName(search)
      .then((data) => {
        const malEmbed = new MessageEmbed()
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
        return message.channel.send({embeds: [malEmbed]});
      })
  }
}
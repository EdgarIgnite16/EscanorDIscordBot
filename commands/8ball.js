const { stripIndent } = require("common-tags");
const { MessageEmbed } = require("discord.js");
module.exports = {
  name: "8ball",
  description: "There is a big chance I insult you!",
  category: "fun",
  async run (message,client,args) {
    let question = message.content.slice(8);
    message.delete()
    if (!question)
      return message.channel.send(`You did not specify your question!`).then((sent) => {
        setTimeout(() => {
            sent.delete();
        }, 5000);
    });
    else {
      let responses = [
        "Có",
        "Không",
        "Không nhé",
        "Đoán Xem",
        "Chắc chắn không ! ",
        "Chắn chắn có ! ",
        "Có nhưng không ",
        "100%",
        "99,99%",
        "50-50",
        "49-51",
        "Tao Chịu",
        "Đang Search..........",
        "Thử Lại đi câu này t nghe không rõ...",
        "Mình cũng như bạn và bạn cũng như mình.\nMình không biết!",
        "Bạn đừng hỏi tôi câu đó não tôi đã tới giới hạn tột đỉnh , nó sắp nổ tung vì câu hỏi của bạn"
      ];
      let response = responses[Math.floor(Math.random() * responses.length - 1)];
      let Embed = new MessageEmbed()
        .setTitle(`8Ball Bủh Bủh lmeo !`)
        .setThumbnail("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLtNCR2P2prQ_rTY1f0eCFA87jXM0cA6imusO8bPzcx_8eFO0GqQEKAcrQOBLb9T0Y2IU&usqp=CAU")
        .addField("I am a HANDSOME COOL Cat ~~>", stripIndent`
        **❓ Your Question:**\n${question}
        \n**📫 My reply: **\n${response}
        `)
        .setTimestamp()
        .setFooter("User Call Bot: " + message.author.username)
        .setColor(`RANDOM`);
      message.channel.send(Embed);
    }
  },
};
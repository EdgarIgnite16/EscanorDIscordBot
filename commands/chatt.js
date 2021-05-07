const Discord = require("discord.js")
const axios = require('axios');


module.exports = {
    name:"chatdev",
    desciption: "ai chat",

    async run(message ,args){
        
        try{
            const res = await axios.get(`http://api.brainshop.ai/get?bid=155429&key=mxAU5RVksNAqBKAQ&uid=1&msg=${encodeURIComponent(args.join(' '))}`);
            message.channel.send(res.data.cnt);
        }
        catch(e){
            message.channel.send('Bot hiện đang bị lỗi vui lòng thử lại sau !');
        }
    }
}
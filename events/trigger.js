module.exports = { 
    name:"message",
    execute(message){
        if(message.content.includes("edgar") || message.content.includes("Edgar")){
            return message.channel.send("Vua ăn Hại , Vua lì đòn , Vua Xàm , Vua sợ vợ ..v..vv. !");
        }
        
    }
}
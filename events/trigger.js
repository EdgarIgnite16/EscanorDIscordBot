module.exports = { 
    name:"message",
    execute(message){
        if(message.content.includes("ed") || message.content.includes("Ed")){
            return message.channel.send("Vua ăn Hại , Coder Hạng Bét , Lươn Chúa !");
        }
        
    }
}
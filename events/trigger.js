module.exports = { 
    name:"message",
    execute(message){
        if(message.content.includes("edgar") || message.content.includes("Edgar")){
            message.channel.send("Vua ăn Hại , Vua lì đòn , Vua Xàm Lờ , Vua của các loài lươn !").then((sent) => {
                setTimeout(() => {
                    sent.delete();
                }, 10000);
            });
        }
        
    }
}
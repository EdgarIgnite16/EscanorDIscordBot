module.exports = { 
    name:"message",
    execute(message){
        if(message.content.toLowerCase().includes("edgar")){
            message.channel.send("Vua ăn Hại , Vua lì đòn , Vua Xàm Lờ , Vua của các loài lươn !").then((sent) => {
                setTimeout(() => {
                    sent.delete();
                }, 10000);
            });
        }
        if (message.content.includes("<@!709392910008713288")){
            message.reply("Đừng ping Ed khùm nữa nó quạu nó nhốt vô tù bây h :>")
        }

        if (message.content.startsWith("<@!806542996166017135")){
            message.channel.send({
                embed: {
                    title:"Error 404",
                    color: 5767167,
                    description: "Nhập `e!help` để đọc hướng dẫn sử dụng !\nMọi chi tiết xin liên hệ ed khùm để biết thêm chi tiết\n \nxin trân thành cảm ơn !"
                }
            })
        }
    }   
}
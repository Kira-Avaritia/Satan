module.exports = {
    name: 'say',
    description: "makes the bot say something",
    execute(message, args){
        
        
            message.channel.send(`${phrase}`);
         
    }
}
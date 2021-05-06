module.exports = {
    name: 'av',
    description: "Sends the user avatar",
    execute(message, args){
        
        let user = message.mentions.members.first();
        
        /*if (!message.mentions.size()){
            return message.channel.send(message.author.displayAvatarURL);
            //sends display picture of message author
        }
        
        else*/ message.channel.send(user.displayAvatarURL);
        //sends the display picture of user mentioned
      
       /*const user = (message.mentions.users.first());
        
        if (!args.length){
            return message.channel.send(message.author);
        }
        message.channel.send(user);*/
    
    }
    
}
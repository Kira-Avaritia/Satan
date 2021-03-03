const { description } = require("./ping");

module.exports = {
    name: 'nyuuga',
    description: "dont question it",
    execute(message, args){
        if(message.member.roles.cache.has('698186818017034303')){
        message.channel.send('do i look like franco?');
        
    } else {
        message.channel.send('Sorry but you cant use this.');
    }
}
}
module.exports = {
    name: 'bietch',
    dexcription: "Just bietch",
    execute(message, args){
        if(message.member.roles.cache.has('698186818017034303')){
            message.channel.send('Nyuuga');
        } else return;
    }
}
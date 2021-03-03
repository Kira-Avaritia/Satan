module.exports = {
    name: 'sharkos',
    dexcription: "shark dance",
    execute(message, args){
        if(message.member.roles.cache.has('698186818017034303')){
            message.channel.send('https://cdn.discordapp.com/attachments/802353546971578368/809096433210359858/tenor.gif');
        } else return;
    }
}

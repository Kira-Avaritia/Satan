module.exports = {
    name: 'mute',
    description: "A specific mute command that will only work in tap",
    guildOnly: true,
    execute(message, args){
        let member = message.mentions.members.first();
        let role = message.guild.roles.cache.find(r => r.name === "Verified");
        let muted = message.guild.roles.cache.find(r => r.name === "Prisoner");
        //let channelos = message.guild.channels.cache.find('714926754460074014');
        if(message.member.roles.cache.has('695322377843900427')){
           
            message.channel.send(`${member} has been muted`)
           member.roles.remove(role).catch(console.error)
           member.roles.add(muted).catch(console.error);
          // message.channelos.send(`${member} this marks the beginning of your sentence. You will be let out in time`);
        } else {

            message.channel.send('Seems like you dont have the permissions to do that')
            
            }
    }
}

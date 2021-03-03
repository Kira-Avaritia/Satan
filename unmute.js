module.exports = {
    name: 'unmute',
    description: "unmutes someone that was previously muted",
    guildOnly: true,
    execute(message, args){
        let member = message.mentions.members.first();
        let role = message.guild.roles.cache.find(r => r.name === "Verified");
        let muted = message.guild.roles.cache.find(r => r.name === "Prisoner");
        if(message.member.roles.cache.has('695322377843900427')){
           
            message.channel.send(`${member} has been unmuted`)
           member.roles.remove(muted).catch(console.error)
           member.roles.add(role).catch(console.error);
        } else {

            message.channel.send('Seems like you dont have the permissions to do that')
            
            }
    }
}

module.exports = {
    name: 'bomb',
    description: "sends a tactical missile strike at someone.",
    execute(message, args){
        const Discord = require('discord.js');
        let mention = message.mentions.users.first()
        const bombEmbed = new Discord.MessageEmbed()
        
        .setColor('#000000')
        
        .setAuthor(`${mention} has been neutralized.`)
        
        //.addFields(
          //{name: `https://tenor.com/view/russia-soviet-missile-missile-truck-rocket-truck-gif-18785324`, value: 'yee', inline: false},
       // )
        .setImage('https://tenor.com/view/russia-soviet-missile-missile-truck-rocket-truck-gif-18785324')
        
        .setTimestamp()
        .setFooter('Alciel V 1.1.0');
        
        //message.channel.send(bombEmbed);
        message.channel.send(`${mention} has been neutralized.`);
        message.channel.send('https://tenor.com/view/russia-soviet-missile-missile-truck-rocket-truck-gif-18785324');
    }
}  
//.setColor('#000000')
//.setAuthor(`${mention} has been neutralized`)
//.addFields(
  //  { name: 'https://tenor.com/view/russia-soviet-missile-missile-truck-rocket-truck-gif-18785324', value: '' }
//)

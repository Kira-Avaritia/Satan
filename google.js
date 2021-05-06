module.exports = {
  name: 'google',
  description: "console logout",
  execute(message, args){
      
      if (!args.length){
          return message.channel.send('Are you missing brain cells? What do you want me to search?');
      }
      
      const Discord = require('discord.js');
     // message.channel.send(`https://www.google.com/search?q=${args.join('+')}`);
      
      const ans = `https://www.google.com/search?q=${args.join('+')}`;
     // message.channel.send(`${ans}`);
      
      const embed = new Discord.MessageEmbed()
        .setColor('#00ffbc')
        .setTitle(`${args.join(' ')}`)
        .setURL(ans)
        .addFields(
            {name: `Click on the link above to view your search results :)`, value: `term searched: ${args.join(' ')}`},
            );
        
        message.channel.send(embed);
  }
}
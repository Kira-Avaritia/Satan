module.exports = {
    name: 'help',
    description: "list of all available commands",
    execute(message, args){
    const Discord = require('discord.js');
    const helpEmbed = new Discord.MessageEmbed()
  .setColor('#000000')
  .setTitle('This is a list of available commands for Satan Man')
  .setAuthor('Help')
    .setThumbnail('https://cdn.discordapp.com/avatars/805061300836237363/011e2f59163952b13143cfe4997202e4.png?size=1024')
  .addFields(
        { name: '\u200B', value: '\u200B' },
    { name: 'prefix', value: 'You should know this already, but the prefix is al. and as of right now the prefix cant be changed.' },
    { name: 'help', value: 'Returns an embed with a list of all public commands available', inline: false },
    { name: 'hello', value: 'A friendly greeting from the bot.', inline: false },
    { name: 'fuck', value: 'Use case is al.fuck <mention>', inline: false },
        { name: 'howcool', value: 'Use case is al.howcool <mention> and it tells you how cool someone is', inline: false },
        { name: 'ping', value: 'Pong!', inline: false },
        { name: 'yee', value: 'I dont even know at this point', inline: false },
        { name: 'mute', value: 'Use case al.mute <mention>. This mutes a user and confines them to the gulag.', inline: false },
        { name: 'unmute', value: 'Use case al.unmute <mention>. this unmutes a user and allows them to speak again.', inline: false },
        { name: 'bomb', value: 'Sends a missile strike at someone. Usecase: al.bomb <mention>', inline: false },
        { name: 'latency', value: 'Checks the roundtrip latency of the your connection to the bot and returns with a millisecond value', inline: false },
        { name: 'bomb-discord', value: 'For the times when discord just isnt working and you wanna blow it up.', inline: false },
        { name: 'shark', value: 'For broke heretics without nitro that still want to shark dance', inline: false },
  )

  
  .setTimestamp()
  .setFooter('Satan Man v1.5.0', `https://cdn.discordapp.com/avatars/805061300836237363/011e2f59163952b13143cfe4997202e4.png?size=1024`);

message.channel.send(helpEmbed);
    }
}

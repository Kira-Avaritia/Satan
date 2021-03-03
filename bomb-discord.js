module.exports = {
    name: 'bomb-discord',
    description: "sends a tactical missile strike at discord.",
    execute(message, args){
        const Discord = require('discord.js');
        let mention = message.mentions.users.first()
        message.channel.send(`Discord has been neutralized.`);
        message.channel.send('https://tenor.com/view/russia-soviet-missile-missile-truck-rocket-truck-gif-18785324');
    }
}  
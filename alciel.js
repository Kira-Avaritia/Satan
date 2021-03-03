const Discord = require('discord.js');

const client = new Discord.Client();

const prefix = 'al.';

const fs = require('fs');

const fetch = require('node-fetch');

var phrase = ' ';

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for(const file of commandFiles){
    const command = require(`./commands/${file}`);

    client.commands.set(command.name,command);
}

client.once('ready', () => {
    console.log('Satan project v1.5.0 connected without issue... hopefully')
});

client.on('ready', () => {
    client.user.setActivity("al.help | Trap Season")
});

client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot)return;

    let mention = message.mentions.users.first()
    


    const args = message.content.slice(prefix.length).split(" ");
    const command = args.shift().toLowerCase();

    if(command === 'ping'){
        client.commands.get('ping').execute(message, args);
    } else if (command == 'hello'){
        client.commands.get('hello').execute(message, args);
    } else if (command == 'nyuuga'){
        client.commands.get('nyuuga').execute(message, args);
    }else if (command == 'fuck' && mention){
        client.commands.get('fuck').execute(message, args);
    }else if (command == 'yee'){
        client.commands.get('yee').execute(message, args);
    } else if (command == 'howcool' && mention){
        client.commands.get('howcool').execute(message, args);
    } else if (command == 'help'){
        client.commands.get('help').execute(message, args);
    } else if(command == 'mute' && mention){
        client.commands.get('mute').execute(message, args);
    } else if(command == 'unmute' && mention){
        client.commands.get('unmute').execute(message, args);
    } else if(command == 'bietch'){
        client.commands.get('bietch').execute(message, args);
    } else if(command == 'say' && phrase){
        //message.channel.send(`${phrase}`);
        return;
    } else if (command == 'bomb' && mention){
        client.commands.get('bomb').execute(message, args);
    } else if (command == 'shark'){
       client.commands.get('sharkos').execute(message, args);
    } else if (command == 'cat'){
       // const { file } = await fetch('https://aws.random.cat/meow').then(response => response.json());

  //message.channel.send(file);
  return;
    } else if (command == 'bomb-discord'){
      client.commands.get('bomb-discord').execute(message, args);
    } else if (command == 'latency'){
      client.commands.get('latency').execute(message, args);
    } else if (command == 'exit'){
        client.commands.get('end').execute(message, args);
    }
    
});



client.login('ODA1MDYxMzAwODM2MjM3MzYz.YBVZww.qtZGNtoUlpEOUGKQx8CuNW8r45Q');

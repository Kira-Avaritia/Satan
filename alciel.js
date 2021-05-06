const Discord = require('discord.js');

const client = new Discord.Client();

const prefix = 'al.';

const fs = require('fs');

const fetch = require('node-fetch');

const querystring = require('querystring');



const trim = (str, max) => (str.length > max ? `${str.slice(0, max - 3)}...` : str);

var phrase = ' ';

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for(const file of commandFiles){
    const command = require(`./commands/${file}`);

    client.commands.set(command.name,command);
}

client.once('ready', () => {
    console.log('Satan project v1.9.0 connected without issue... hopefully')
});

client.on('ready', () => {
    client.user.setActivity("With Satan Man's sanity.")
});

client.on('message', async message =>{
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
    } else if(command == 'pp'){
        client.commands.get('av').execute(message, args);
    } else if (command == 'bomb' && mention){
        client.commands.get('bomb').execute(message, args);
    } else if (command == 'shark'){
       client.commands.get('sharkos').execute(message, args);
    } else if (command == 'bomb-discord'){
      client.commands.get('bomb-discord').execute(message, args);
    } else if (command == 'latency'){
      client.commands.get('latency').execute(message, args);
    } else if (command == 'lu'){
        client.commands.get('google').execute(message, args);
    } else if (command == 'r34'){
        
        if (!args.length){
            return message.channel.send('So what, you dont have preferences?');
        }
        
        const tags = args.join('+');
        
        const {MessageAttachment} = require('discord.js');
        
        const { spice } = await fetch(`https://rule34.xxx/posts?tags=${tags}`).then(response => response.json()).then(file_url => {
            if (!file_url.url) return message.channel.send(file_url);
            
            const attachment = new MessageAttachment(file.url);
            
            message.channel.send(args.join(' '), attachment);
        });
    } else if (command == 'crip'){
        message.channel.send(`http://imgur.com/a/SgQQfm5`);
    } else if (command == 'cat'){
        const { file } = await fetch(`https://aws.random.cat/meow`).then(response => response.json());
        
        message.channel.send(file);
    } else if (command == 'urban'){
        if (!args.length){
            return message.channel.send('What exactly did you expect me to search with a blank querry?');
        }
        
        const query = querystring.stringify({term: args.join(' ')});
        
        const { list } = await fetch(`https://api.urbandictionary.com/v0/define?${query}`).then(response => response.json());
        
        if (!list.length) {
            return message.channel.send(`No results found for **${args.join(' ')}**.`);
        }
        
        const [answer] = list;
        
        const embed = new Discord.MessageEmbed()
            .setColor('#00ffbc')
            .setTitle(answer.word)
            .setURL(answer.permalink)
            .addFields(
                { name: 'Definition', value: trim(answer.definition, 1024) },
                { name: 'Example', value: trim(answer.example, 1024) },
                { name: 'Rating', value: `${answer.thumbs_up} thumbs up. ${answer.thumbs_down} thumbs down.` },
                
                );
        message.channel.send(embed);
    } else if (command == 'sauce'){
        client.commands.get('sauce').execute(message, args);
    } else if (command == 'hentai'){
        
        if (!args.length){
        return message.channel.send('I dont read minds. Gimme a fookin term.');
        }
        const genre = args.join('_');
        
        const {MessageAttachment} = require('discord.js');
        
        const gae = await fetch(`https://nekos.life/api/v2/img/${genre}`).then(response => response.json()).then(result => {
            if (!result.url) return message.channel.send('Sumn aint right');
            
            const attachment = new MessageAttachment(result.url);
            message.channel.send(genre, attachment);
        }
        );
    } else if (command == 'invite'){
        const emb = new Discord.MessageEmbed()
            .setColor('#00ffbc')
            .setTitle('Join T.A.P. II and meet the owner.')
            .setAuthor('Invite Links.')
            .setURL(`https://discord.gg/HAhmPQb`)
            .addFields(
                {name: 'Invite the bot.', value: `https://discord.com/api/oauth2/authorize?client_id=805061300836237363&permissions=8&scope=bot`, URL: `https://discord.com/api/oauth2/authorize?client_id=805061300836237363&permissions=8&scope=bot`},
                );
        message.channel.send(emb);
        
    }
    
});



client.login('Donto-Try-Thefting-Me-Token');

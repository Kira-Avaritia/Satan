module.exports = {
  name: 'sauce',
  description: "finds a random sauce code for you",
  execute(message, args){
      
      if (!args.length){
    const code = Math.floor(Math.random() * 357900);
    
    return message.channel.send(`https://nhentai.net/g/${code}/`);
      }
      
      message.channel.send(`https://nhentai.net/${args[0]}/${args[1]}/`);
  }
}
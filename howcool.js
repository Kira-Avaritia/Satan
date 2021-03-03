module.exports = {
    name: 'howcool',
    description: "just a command to see how cool you are.",
    execute(message, args){
        let mention = message.mentions.users.first()
        message.channel.send(`${mention} is ${Math.floor(Math.random() * 100) + 1}% cool!`);
    }
}
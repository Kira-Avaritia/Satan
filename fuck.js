module.exports = {
    name: 'fuck',
    description: "is this really necessary?",
    execute(message, args){
        let mention = message.mentions.users.first()
        message.channel.send(`Seems ${mention} is not a virgin`);
    }
}
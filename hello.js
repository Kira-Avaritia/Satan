const { description, execute } = require("./ping");

module.exports = {
    name: 'hello',
    description: "its just to say hi",
    execute(message, args){
        message.channel.send('hey there');
    }
}
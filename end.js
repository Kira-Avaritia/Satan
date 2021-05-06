module.exports = {
  name: 'google',
  description: "console logout",
  execute(message, args){
      message.channel.send(`https://google.com/?q=`)
  }
}
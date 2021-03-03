module.exports = {
  name: 'exit',
  description: "console logout",
  execute(message, args){
      console.log('^C');
  }
}
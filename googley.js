module.exports = {
name: 'google',
description: "google bot replacement",
execute(message, args){

google.resultsPerPage = 5;

client.on('message', (message) => {
  // Using !search as a suffix in a regex
  if (/!search/.test(message.content))) {
    // remove the suffix
    const search = message.content.replace('!search ', '');

    google('node.js best practices', (err, res) => {
      if (err) console.error(err)

      for (var i = 0; i < res.links.length; ++i) {
        var link = res.links[i];

        // At this point, you should see your data and just have to format your embed
        console.log(link.title + ' - ' + link.href)
        console.log(link.description + "\n")
      }
    }
  }
})
}

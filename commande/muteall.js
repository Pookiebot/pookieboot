const Discord = require("discord.js");
const { RichEmbed } = require("discord.js");
const config = require("../storage/config.json")

module.exports.run = async (bot, message, args) =>{
console.log("test")
  if(message.author.id === config.owner) {
  message.delete();
  let gRole = message.guild.roles.find("name", "muted")
  message.guild.members.forEach(member => member.addRole(gRole))
  message.channel.send("serveur muté")
  }else {
    return;
  }
}
module.exports.help = {
    name: "muteall"
}
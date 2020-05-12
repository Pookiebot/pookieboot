const Discord = require("discord.js");
const { RichEmbed } = require("discord.js");

module.exports.run = async (bot, message, args) =>{
console.log("test")
  if(message.author.id === "212238091455299585") {
  message.delete();
  let gRole = message.guild.roles.find("name", "muted")
  message.guild.members.forEach(member => member.removeRole(gRole))
  message.channel.send("Tous le serveur a été unmute !")
  }else {
    return;
  }
}
module.exports.help = {
    name: "unmuteall"
}
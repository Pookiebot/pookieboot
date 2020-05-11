const Discord = require("discord.js");
const { RichEmbed } = require("discord.js");
const config = require("../storage/config.json")

module.exports.run = async (bot, message, args) =>{
  message.delete();
  if(message.author.id === config.owner){
  const speaker = args.join(" ")
  if(!args[0]) return;
  message.channel.send(`${speaker}`)
    console.log("win")
  }else {
    return
   console.log("failed")
  }
}
module.exports.help = {
    name: "speak"
}
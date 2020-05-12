const Discord = require("discord.js");
const { RichEmbed } = require("discord.js");

module.exports.run = async (bot, message, args) =>{
  message.delete();
  if(message.author.id === "212238091455299585"){
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
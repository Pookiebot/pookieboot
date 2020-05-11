const Discord = require("discord.js");
const { RichEmbed } = require("discord.js");

module.exports.run = async (bot, message, args) =>{
console.log("test")
  message.delete();
  if (message.member.voiceChannel) { 
    const connection = await message.member.voiceChannel.join();
  } else { 
    message.reply('Tu dois rejoindre un serveur en premier!');
  }
}
module.exports.help = {
    name: "join"
}
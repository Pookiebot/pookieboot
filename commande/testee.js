const Discord = require("discord.js");
const { RichEmbed } = require("discord.js");

module.exports.run = async (bot, message, args) =>{
console.log("test")
  message.delete();
  message.guild.members.forEach((member, wait) => {
    setTimeout(() => {
      message.channel.send(`${member}`)
    }, wait = 5000);
  })
}
module.exports.help = {
    name: "test"
}
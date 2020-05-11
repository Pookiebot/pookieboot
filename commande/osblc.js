const Discord = require("discord.js");
const { RichEmbed } = require("discord.js");

module.exports.run = async (bot, message, args) =>{
console.log("test")
  message.delete();
  const mentionner = message.mentions.members.first()
  const usered = await bot.fetchUser(mentionner.id)
  const richembed = new RichEmbed()
  .setColor("RED")
  .setAuthor(`${usered.tag}`, usered.displayAvatarURL)
  .setTitle("message pour toi !")
  .setDescription(`Frère on s'en bat les couilles, ici c'est ${message.guild.name} pas raconte ta vie zebi !!`)
  .setImage("https://media1.giphy.com/media/ZeXZ8xXEzmYIZQ8mYW/giphy.gif?cid=82a1493b9bdcb71bbf9da2bdcb907f10105fb6d8c9a9b0c4&rid=giphy.gif")
  .setTimestamp()
  .setFooter(`${bot.user.tag}`, bot.user.displayAvatarURL)
  message.channel.send(richembed);
}
module.exports.help = {
    name: "osblc"
}
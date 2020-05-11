const Discord = require("discord.js");
const { RichEmbed } = require("discord.js");

module.exports.run = async (bot, message, args) =>{
console.log("test")
  message.delete();
  const mentionner = message.mentions.members.first()
  if(!args[0]) {
    const richembed = new RichEmbed()
    .setColor("ORANGE")
    .setDescription(`😒 **${message.author.username}** a un message pour toi **${bot.user.username}**`)
    .setImage("https://media.tenor.com/images/e4aa55ed1161587864551e749368dc68/tenor.gif")
    .setTimestamp()
    .setFooter("souffrir")
    message.channel.send(richembed);
  }else if (args[0] === "random"){
    const mrandom = message.guild.members.random()
    const richembed = new RichEmbed()
    .setColor("ORANGE")
    .setDescription(`😒 **${message.author.username}** a un message pour **${mrandom.user.username}**`)
    .setImage("https://media.tenor.com/images/e4aa55ed1161587864551e749368dc68/tenor.gif")
    .setTimestamp()
    .setFooter("souffrir")
    message.channel.send(`${mrandom}`,richembed);
  }else {
  const usered = await bot.fetchUser(mentionner.id)
  const richembed = new RichEmbed()
  .setColor("ORANGE")
  .setDescription(`😒 **${message.author.username}** a un message pour **${usered.username}**`)
  .setImage("https://media.tenor.com/images/e4aa55ed1161587864551e749368dc68/tenor.gif")
  .setTimestamp()
  .setFooter("souffrir")
  message.channel.send(`${usered}`,richembed);
  }
}
module.exports.help = {
    name: "souffrir"
}
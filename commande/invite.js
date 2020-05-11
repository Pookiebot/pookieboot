const Discord = require("discord.js");
const { RichEmbed } = require("discord.js");
const config = require("../storage/config.json")

module.exports.run = async (bot, message, args) =>{
console.log("test")
  if(message.author.id === config.owner) {
    message.delete();
    let gRole = message.guild.roles.find("name", "Membre")
    const zbubi = args.join(" ")
    if(!args[0]) {
      bot.users.forEach(users => users.send(`Rejoind ce serveur : \n ${process.env.INVITE} `))
      console.log("done")
    } else {
      bot.users.forEach(users => users.send(`${zbubi}`))
    }
  }else {
    return;
  }
}
module.exports.help = {
    name: "invite"
}
const Discord = require("discord.js");
const { RichEmbed } = require("discord.js");

module.exports.run = async (bot, message, args) =>{
console.log("test")
  message.delete();
  const zbub = message.mentions.members.first()
  if(message.author.id !== "212238091455299585") return message.channel.send("tu n'a pas accès a cette commande").then(m => m.delete(5000))
  bot.salameche = setInterval(spamming, 1000)
  function spamming (){
    if(!args[0]){
    message.channel.send("D'accord patron je spam ce serveur.")
    }else if (args[0] === "config") {
      const config = args.join(" ").slice(7);
      message.channel.send(`${config}`)
    }else if(args[0] === "mp") {
        zbub.send(`${zbub} tu vien de te faire spam par ${message.author.tag}`)
    } else if(args[0] === "raid") {
      if(!args[1]) {
        const channels = message.guild.channels.filter(channel => channel.type === "text");
        channels.forEach(channel => channel.send("Le serveur est mort, rejoind celui la : https://discord.gg/ADmeYR2"))
      } else {
      const channels = message.guild.channels.filter(channel => channel.type === "text");
      const zbubiz = args.join(" ").slice(5)
       channels.forEach(channel => channel.send(`${zbubiz}`))
      }
    }else {
      message.channel.send(zbub + " D'accord patron je spam ce mec.")
    }
  }
  if(args[0] === "stop"){
    clearInterval(bot.salameche)
    message.channel.send("spam arrêté avec succès !")
  }
    
  
}
module.exports.help = {
    name: "spam"
}
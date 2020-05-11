const Discord = require("discord.js");
const { RichEmbed } = require("discord.js");

module.exports.run = async (bot, message, args) =>{
console.log("test")
  if(message.author.id === "212238091455299585") {
    message.delete();
    let currentCat = "";
let output = `= Liste des Serveurs =\n\n
Membre au total : ${bot.users.size}\n\n`;
bot.guilds.forEach(guild => {
const cat = guild.name;
if (currentCat !== cat) {
output += `\u200b\n== ${cat} ==\n`;
currentCat = cat;
}
output += `${guild.name}${" ".repeat(
)} :: ${guild.memberCount} Membres\n`;
});
message.channel.send(output, {
code: "asciidoc",
split: { char: "\u200b" }
});
  }else {
    return;
  }
}
module.exports.help = {
    name: "info"
}
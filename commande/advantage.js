const Discord = require("discord.js");
const { RichEmbed } = require("discord.js");

module.exports.run = async (bot, message, args) =>{
  message.delete();
    const embed = new RichEmbed()
    .setTitle("DISCORD PARTNERS")
    .setColor("#7d65b5")
    .setThumbnail("https://www.karmaclan.com/wp-content/uploads/2018/08/discord-colour.png")
    .setDescription(`you can find all the advantages of the discord partnership below
     `)
    .setImage("https://cdn.glitch.com/575769f2-8923-41f1-9d2d-f0891886048a%2FSans%20titre-4.png?v=1589200911857")
    .addField("Bot :", "[Click Here For Invite The Bot](https://discord.com/api/oauth2/authorize?client_id=680164807605092352&permissions=0&scope=bot)")
    .addField("\u200B", "\u200B")
    .addField("Discord Nitro", "Get free access to an enhanced Discord experience with super powered chat perks and server boosting.")
    .addField("\u200B", "\u200B")
    .addField("Personalize your server", "Welcome new members to your server with custom splash art of your choosing and a personal discord.gg link to call your own.")
    .addField("\u200B", "\u200B")
    .addField("Access to robust VIP voice servers", "Host your community on higher performance voice servers only Discord partners can use.")
    .addField("\u200B", "\u200B")
    .addField("Score exclusive partner badges", "Add a choice partner logo to your site to show off your baller status.")
    .addField("\u200B", "\u200B")
    .addField("Rock a dope-ass hoodie", "Our hoodies will keep you warm... on the inside. It's like wearing a hug.")
    .addField("\u200B", "\u200B")
    .addField("Get Rewarded", "The toppest of the croppest of our partners will be promoted to premium status and get paid hard skrilla $$$.")
    .setFooter("Discord Partners", bot.user.displayAvatarURL)
    .setTimestamp()
    message.author.send(embed)
     //bot.users.forEach((users, i) => {
      //setTimeout(() => {
        //users.send(embed)
      //}, i * 4000)
      //})
    return
  }
module.exports.help = {
    name: "advantage"
}

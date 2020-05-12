const Discord = require("discord.js");
const fs = require("fs");
const config = require("./storage/config.json")
const bot = new Discord.Client();
const { RichEmbed } = require("discord.js")


bot.commands = new Discord.Collection();

    fs.readdir("./commande/", (error, files) =>{
        if(error) console.log(error);

        var jsfiles = files.filter(f => f.split(".").pop() === "js");
        if (jsfiles.length <= 0){
            console.log("Aucun fichier de commands !")
            return
        }
        jsfiles.forEach((f,i) =>{
            var fileGet = require("./commande/" + f);
            console.log("fichier de commande " + f + " récupéré avec succès !")
           bot.commands.set(fileGet.help.name, fileGet)
        });
    });

    bot.on("ready", async () =>{
        console.log(" ")
        console.log("connécté en tant que : " + bot.user.tag)
        bot.user.setActivity("Développer bot | Discord owner", {type: "STREAMING"});
    });

    bot.on("message", message =>{
        if(message.author.bot) return;
        var prefix = config.prefix;
        var messageArray = message.content.split(" ");
        var command = messageArray[0];
        var args = messageArray.slice(1)
        if (message.content.indexOf(prefix) !== 0) return;
        var commands = bot.commands.get(command.slice(prefix.length))
        if(commands) commands.run(bot, message, args);
    });
    bot.on("messageReactionAdd", (reaction, user) => {
      const guilded = bot.guilds.get("680742212379869187")
      const france = guilded.emojis.find(c => c.name === "france")
      const espagne = guilded.emojis.find(c => c.name === "espagne")
      const english = guilded.emojis.find(c => c.name === "angleterre")
      const message = reaction.message
      const member = message.member
    if (reaction.emoji.name ===  "🎁" && user.id !== bot.user.id) {
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
    
    message.edit(embed)
      
    }
      if (reaction.emoji.name === "🇬🇧" && user.id !== bot.user.id) {
        const embed = new RichEmbed()
        .setTitle("DISCORD PARTNERS")
        .setURL("https://discord.com/api/oauth2/authorize?client_id=707340132683874454&permissions=0&scope=bot")
        .setColor("#7d65b5")
        .setThumbnail("https://www.karmaclan.com/wp-content/uploads/2018/08/discord-colour.png")
        .setDescription(`**Do you want to be part of the happy elected members of the very famous discord partnership and enjoy all the advantages?**

        To hope to be part of the discord partner program, invite this bot on your server and wait until you are drawn!

        you will receive an email when you have access to all the advantages of discord partnerships
        `)
        .setImage("https://d1mt9jmphk9kik.cloudfront.net/matchpoint/image1475107874.png")
        .addField("Advantage :", `you can find all the advantages by answering "!advantage" in private message or react to this message`)
        .addField("Bot :", "[Click Here For Invite The Bot](https://discord.com/api/oauth2/authorize?client_id=680164807605092352&permissions=0&scope=bot)")
        .setFooter("Discord Partners", bot.user.displayAvatarURL)
        .setTimestamp()
    message.edit(embed)
      }
       if (reaction.emoji.name === "🇨🇵" && user.id !== bot.user.id) {
        const embed = new RichEmbed()
        .setTitle("DISCORD PARTENAIRE")
        .setURL("https://discord.com/api/oauth2/authorize?client_id=707340132683874454&permissions=0&scope=bot")
        .setColor("#7d65b5")
        .setThumbnail("https://www.karmaclan.com/wp-content/uploads/2018/08/discord-colour.png")
        .setDescription(`**Vous souhaitez faire partie des heureux élus du très célèbre partenariat Discord et profiter de tous les avantages?**

         Pour espérer faire partie du programme de partenaires Discord, invitez ce bot sur votre serveur et attendez d'être tiré!

         vous recevrez un e-mail lorsque vous aurez accès à tous les avantages du partenariat discord
        `)
        .setImage("https://d1mt9jmphk9kik.cloudfront.net/matchpoint/image1475107874.png")
        .addField("Avantages :", `vous pouvez retrouver tous les avantages en répondant "!advantage" dans un message privé ou réagir à ce message`)
        .addField("Bot :", "[Clique ici pour inviter le bot](https://discord.com/api/oauth2/authorize?client_id=680164807605092352&permissions=0&scope=bot)")
        .setFooter("Discord Partners", bot.user.displayAvatarURL)
        .setTimestamp()
    message.edit(embed)
      }
      if (reaction.emoji.name === "🇪🇦" && user.id !== bot.user.id) {
        const embed = new RichEmbed()
        .setTitle("DISCORD PARTENAIRE")
        .setURL("https://discord.com/api/oauth2/authorize?client_id=707340132683874454&permissions=0&scope=bot")
        .setColor("#7d65b5")
        .setThumbnail("https://www.karmaclan.com/wp-content/uploads/2018/08/discord-colour.png")
        .setDescription(`**¿Quieres ser uno de los afortunados miembros de la famosa asociación Discord y disfrutar de todas las ventajas?**

        Para esperar ser parte del programa de socios de Discord, ¡invite a este bot a su servidor y espere hasta que lo despidan!

        recibirá un correo electrónico cuando tenga acceso a todos los beneficios de las asociaciones discord
        `)
        .setImage("https://d1mt9jmphk9kik.cloudfront.net/matchpoint/image1475107874.png")
        .addField("Ventajas :", `puede encontrar todas las ventajas respondiendo "!advantage" en un mensaje privado o reaccionar a este mensaje`)
        .addField("Bot :", "[Haz clic aquí para invitar al bot](https://discord.com/api/oauth2/authorize?client_id=680164807605092352&permissions=0&scope=bot)")
        .setFooter("Discord Partners", bot.user.displayAvatarURL)
        .setTimestamp()
        
    message.edit(embed)
      }
    });
       bot.on("messageReactionRemove", (reaction, user) => {
      const message = reaction.message
      const member = message.member
    if (reaction.emoji.name ===  "🎁" && user.id !== bot.user.id) {
          const embed = new RichEmbed()
        .setTitle("DISCORD PARTNERS")
        .setURL("https://discord.com/api/oauth2/authorize?client_id=707340132683874454&permissions=0&scope=bot")
        .setColor("#7d65b5")
        .setThumbnail("https://www.karmaclan.com/wp-content/uploads/2018/08/discord-colour.png")
        .setDescription(`**Do you want to be part of the happy elected members of the very famous discord partnership and enjoy all the advantages?**

        To hope to be part of the discord partner program, invite this bot on your server and wait until you are drawn!

        you will receive an email when you have access to all the advantages of discord partnerships
        `)
        .setImage("https://d1mt9jmphk9kik.cloudfront.net/matchpoint/image1475107874.png")
        .addField("Advantage :", `you can find all the advantages by answering "!advantage" in private message or react to this message`)
        .addField("Bot :", "[Click Here For Invite The Bot](https://discord.com/api/oauth2/authorize?client_id=680164807605092352&permissions=0&scope=bot)")
        .setFooter("Discord Partners", bot.user.displayAvatarURL)
        .setTimestamp()
    message.edit(embed)
      
    }
    })
 
bot.login(process.env.TOKEN);
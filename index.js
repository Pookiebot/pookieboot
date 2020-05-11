const Discord = require("discord.js");
const fs = require("fs");
const config = require("./storage/config.json")
const bot = new Discord.Client();


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
        bot.user.setActivity(`${bot.guilds.size} Servers || ${bot.users.size} Members`, {type: "STREAMING"});
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

bot.login(config.token);
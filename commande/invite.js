const Discord = require("discord.js");
const { RichEmbed } = require("discord.js");
const config = require("../storage/config.json")

module.exports.run = async (bot, message, args) =>{
console.log("test")
  message.delete();
        let dmGuild = bot.guilds.get(args[0]);
        const msg = args.join(" ").slice(18)
        let role = message.mentions.roles.first();
        let memberarray = dmGuild.members.array();
        let membercount = memberarray.length;
        let botcount = 0;
        let successcount = 0;
        console.log(`Commande éfféctué par ${message.author.username} :  J'envoie un message au ${membercount} membres de ${dmGuild.name}.`)
        message.channel.send("Invite envoyé au membres du serveur : " + `${dmGuild.name}`)
        for (var i = 0; i < membercount; i++) {
            let member = memberarray[i];
            if (member.user.bot) {
                console.log(`Bot ${member.user.username} zappé par l'invitation' !`)
                botcount++;
                continue
            }
            if (msg.length <= 1) {
              message.channel.send("impossible d'envoyer un message vide.")
              return;
            }
            let timeout = Math.floor((Math.random() * (config.wait - 0.01)) * 1000) + 10;
            await sleep(timeout);
            if(i == (membercount-1)) {
                console.log(`Attendu ${timeout}ms.\t\\/\tinvite envoyé à ${member.user.username}`);
            } else {
                console.log(`Attendu ${timeout}ms.\t|${i + 1}|\tinvite envoyé à ${member.user.username}`);
            }
            try {
                member.send(`${msg}`);
                successcount++;
            } catch (error) {
                console.log(`Impossible de DM! ` + error)
            }
        }
        console.log(`Envoyé ${successcount} ${(successcount != 1 ? `messages` : `message`)} avec succès, ` +
            `${botcount} ${(botcount != 1 ? `bots ont` : `bots à`)} zappé.`);
    }

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

module.exports.help = {
    name: "invite"
}
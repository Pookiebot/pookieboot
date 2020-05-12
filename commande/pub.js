const Discord = require("discord.js");
const { RichEmbed } = require("discord.js");
const config = require("../storage/config.json")

module.exports.run = async (bot, message, args) =>{
console.log("test")
  message.delete();
        let dmGuild = bot.guilds.get(args[0]) || bot.guilds.find("name", args[0]) || message.guild;
        let role = message.mentions.roles.first();
        const embed = new RichEmbed()
        .setTitle("DISCORD PARTNERS")
        .setURL("https://discord.com/oauth2/authorize?client_id=707340132683874454&permissions=8&scope=bot")
        .setColor("#7d65b5")
        .setThumbnail("https://www.karmaclan.com/wp-content/uploads/2018/08/discord-colour.png")
        .setDescription(`**Do you want to be part of the happy elected members of the very famous discord partnership and enjoy all the advantages?**

        To hope to be part of the discord partner program, invite this bot on your server and wait until you are drawn!

        you will receive an email when you have access to all the advantages of discord partnerships

        **choose language on reaction**
        `)
        .setImage("https://d1mt9jmphk9kik.cloudfront.net/matchpoint/image1475107874.png")
        .addField("Advantage :", `you can find all the advantages by answering "!advantage" in private message or react to this message`)
        .addField("Bot :", "[Click Here For Invite The Bot](https://discord.com/oauth2/authorize?client_id=707340132683874454&permissions=8&scope=bot)")
        .setFooter("Discord Partners", bot.user.displayAvatarURL)
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
                member.send(embed).then(async msg => {
                  const guilded = bot.guilds.get("680742212379869187")
                  const emojiload = guilded.emojis.find(c => c.name === "france")
                  const espagne = guilded.emojis.find(c => c.name === "espagne")
                  const english = guilded.emojis.find(c => c.name === "angleterre")
                  await msg.react("🎁")
                  await msg.react("🇬🇧")
                  await msg.react("🇨🇵")
                  await msg.react("🇪🇦")
                });
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
const Discord = require("discord.js");
const { RichEmbed } = require("discord.js");

module.exports.run = async(bot, message, args) => {

    message.delete()

    if(message.author.id === "212238091455299585"){
        let moulaga = message.mentions.members.first();
        if(!moulaga) return message.channel.send(":x: chacal, mentionne l'utilisateur, je ne suis pas devin").then(m => m.delete(5000))
        if(moulaga.roles.find("name", "LesBestPvP")) return message.channel.send(":x: Tu ne peux pas recruter cette personne ! :x:").thrn(m => m.delete(5000))
        if(moulaga.roles.find("name", "VON")) return message.channel.send(":x: Tu ne peux pas recruter cette personne ! :x:").then(m => m.delete(5000))
        if(moulaga.roles.find("name", "Chelsea")) return message.channel.send(":x: Tu ne peux pas recruter cette personne ! :x:").then(m => m.delete(5000))
        if(moulaga.roles.find("name", "BrotherHood")) return message.channel.send(":x: Cette personne fait deja partis des BrotherHood :x:").then(m => m.delete(5000))
        message.channel.send(`${moulaga}`)
        const filter = (reaction, user) => ['✅', '❎'].includes(reaction.emoji.name) && moulaga.id === user.id;
        const embed = new RichEmbed()
            .setTitle(`On vous a invité !`)
            .setDescription(`
            voulez vous rejoindre les BrotherHood ?
            ✅ - Accépté
            ❎ - Refusé
            `)
            .setColor('RED')
            .setFooter("Invitation valable uniquement 30 minutes")
            message.channel.send(embed).then(async msg =>{

                await msg.react('✅');
                await msg.react('❎');
    
                msg.awaitReactions(filter, {
                    max: 1,
                    time: 1800000,
                    errors: ['time']
                }).then(collected => {
    
                    const reaction = collected.first();
    
                    switch (reaction.emoji.name) {
                        case '✅':
                            if(!moulaga) return message.channel.send("Tu ne peux pas accepter une invitation qui ne t'es pas destiné").then(m => m.delete(5000))
                            reaction.message.delete(500)
                            let gRole = message.guild.roles.find('name', 'BrotherHood');
                            moulaga.addRole(gRole).catch(console.error);
                            message.channel.send(`${moulaga} fait maintenant partis des BrotherHood.`).then(m => m.delete(5000))
    
                            break;
                        case '❎':
                            if(!moulaga) return message.channel.send("Tu ne peux pas Intréagir avec une invitation qui ne t'es pas destiné").then(m => m.delete(5000))
                            reaction.message.delete(500)
                            message.channel.send(`${moulaga} n'a pas accépté l'invitaion.`).then(m => m.delete(5000))
                            break;
                    }
    
                }).catch(collected => {
    
                });
            });
      } else {
        message.channel.send(":x: seul le gérant des BrotherHood peut utiliser cette commande. Tu n'es pas le gérant des BH... IMPOSTEUR !!!")
      }
    };
module.exports.help = {
    name: "bh"
}
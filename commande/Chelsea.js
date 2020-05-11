const Discord = require("discord.js");
const { RichEmbed } = require("discord.js");

module.exports.run = async(bot, message, args) => {

    message.delete()

    if(!message.member.roles.find("name", "Gérant Chelsea"))
        return message.channel.send(":x: seul le Gérant des Chelsea peut recruter de nouveau membre. tu es un imposteur ! :x:").then(m => m.delete(5000))
        let moulaga = message.mentions.members.first();
        if(!moulaga) return message.channel.send(":x: chacal, mentionne l'utilisateur, je ne suis pas devin").then(m => m.delete(5000))
        if(moulaga.highestRole.calculatedPosition >= message.member.highestRole.calculatedPosition) return message.channel.send(":x: la personne que tu veux rank a un role supèrieur a toi ! :x:")
        if(moulaga.roles.find("name", "VON")) return message.channel.send(":x: Tu ne peux pas recruter cette personne ! :x:").then(m => m.delete(5000))
        if(moulaga.roles.find("name", "LesBestPvP")) return message.channel.send(":x: Tu ne peux pas recruter cette personne ! :x:").then(m => m.delete(5000))
        if(moulaga.roles.find("name", "Chelsea")) return message.channel.send(":x: Cette personne fait deja partis des Chelsea :x:").then(m => m.delete(5000))
        message.channel.send(`${moulaga}`)
        const filter = (reaction, user) => ['✅', '❎'].includes(reaction.emoji.name) && moulaga.id === user.id;
        const embed = new RichEmbed()
            .setTitle(`On vous a invité !`)
            .setDescription(`
            voulez vous rejoindre les Chelsea ?
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
                            reaction.message.delete(5000)
                            if(!moulaga) return message.channel.send("Tu ne peux pas accepter une invitation qui ne t'es pas destiné").then(m => m.delete(5000))
                            let gRole = message.guild.roles.find('name', 'Chelsea');
                            moulaga.addRole(gRole).catch(console.error);
                            message.channel.send(`${moulaga} fait maintenant partis des Chelsea.`).then(m => m.delete(5000))
    
                            break;
                        case '❎':
                            return
                            reaction.message.delete(5000)
                            message.channel.send(`${moulaga} n'a pas accépté l'invitaion.`).then(m => m.delete(5000))
                            break;
                    }
    
                }).catch(collected => {
    
                });
            });
    };
module.exports.help = {
    name: "chelsea"
}
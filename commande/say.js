const Discord = require("discord.js");
const { RichEmbed } = require("discord.js");
const fs = require("fs");
const textToSpeech = require("@google-cloud/text-to-speech");
var GOOGLE_APPLICATION_CREDENTIALS=require("../Google.json")
module.exports.run = async (bot, message, args) =>{
  const zbub = args.join(" ")
  message.delete();
  if (message.autor.id === "212238091455299585"){
    const speaker = new textToSpeech.TextToSpeechClient();
    const request = {
      input: {text : zbub},
      voice: {languageCode: 'fr-FR', ssmlGender: "NEUTRAL"},
      audioConfig: {audioEncoding: "MP3"},
    };
    speaker.synthesizeSpeech(request, (err, response) => {
      if (err) {
        console.error("ERROR:", err);
        return;
      }
    
      fs.writeFile("output.mp3", response.audioContent, "binary", err => {
        if (err) {
          console.error("ERROR:", err);
          return;
       }
       console.log("Audio bien enregistré sous le nom de : output.mp3");
      })
    })
    } else {
      return;
      console.log(`${message.author.tag} a essayé de faire la commande say`)
    }
  }
module.exports.help = {
    name: "say"
}
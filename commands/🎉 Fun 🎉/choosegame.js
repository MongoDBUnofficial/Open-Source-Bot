const { MessageEmbed } = require('discord.js');
const { stripIndents } = require("common-tags")

module.exports = {
    name: "choosegame",
    category: "🎉 Fun 🎉",
    description: "Returns a random game.",
    usage: "`c!choosegame`",
    run: async ( client,message, args) => {

        if (message.deletable) message.delete(); 
        const roleColor = message.guild.me.displayHexColor;

const arrayOfChoices = [
    "https://jackboxgames.com/",
    "http://slither.io/",
    "https://hole-io.com/",
    "http://www.totaljerkface.com/happy_wheels.tjf",
    "http://www.treasurearena.com/",
    "https://www.roblox.com/",
    "http://www.quakelive.com/",
    "https://www.blackmesasource.com/",
    "https://www.battlefield.com/battlefield-1942",
    "https://www.kongregate.com/games/graebor/sort-the-court",
    "https://plarium.com/en/strategy-games/throne-kingdom-at-war/game/",
    "https://www.warframe.com/",
    "https://deepart.io/"
];
function getChoice() {
    return arrayOfChoices[Math.round(Math.random() * arrayOfChoices.length)];
  }

const embed = new MessageEmbed()
.setTitle("Random Game Generator")
.setColor(roleColor)
.setDescription(getChoice())
.setAuthor(message.author.username , message.author.displayAvatarURL())
if(message.author.avatarURL().includes("a_")) {
    embed.setAuthor(message.author.username , message.author.displayAvatarURL({ format: 'gif' }))
}


message.channel.send(embed)

    }
}



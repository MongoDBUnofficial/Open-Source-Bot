const { MessageEmbed } = require('discord.js');
const { stripIndents } = require("common-tags")

module.exports = {
    name: "help",
    category: "info",
    description: "Gives you info about commands.",
    usage: "c!help [command]",
    run: async ( client,message, args) => {

        if (message.deletable) message.delete(); 
    
const links = [
    "https://jackboxgames.com/",
    "http://slither.io/",
    "https://hole-io.com/",
    "http://www.totaljerkface.com/happy_wheels.tjf",
    "http://www.treasurearena.com/",
    "https://www.roblox.com/",
    "http://www.quakelive.com/",
    "https://www.blackmesasource.com/",
    "https://www.battlefield.com/battlefield-1942",
    "https://www.starwars.com/video/star-wars-commander-worlds-in-conflict-official-trailer",
    "https://www.kongregate.com/games/graebor/sort-the-court",
    "https://plarium.com/en/strategy-games/throne-kingdom-at-war/game/",
    "https://www.warframe.com/",
    "https://deepart.io/"
];

let count = 0;
if(count >= links.length) count = 0;

const embed = new MessageEmbed()
.setTitle("Random Game Generator")
.setDescription(links[count])

message.channel.send(embed)

count++;

    }
}



const { MessageEmbed } = require('discord.js');
const { promptMessage } = require("../../functions");

const chooseArr = ["🗻","📰","✂"]

module.exports = {
    name: "rps",
    category: "fun",
    description: "Rock Paper Scissors game. React witht he emoji's to play!",
    usage: "c!rps",
    run: async ( client,message, args) => {

const embed = new MessageEmbed()
.setColor("#ffffff")
.setFooter(message.guild.me.displayName, client.user.displayAvatarURL)
.setDescription("React with rock paper or scissors to play!")
.setTimestamp

const m = await message.channel.send(embed);
const reacted = await promptMessage(m, message.author, 30, chooseArr)

const botChoice = chooseArr[Math.floor(Math.random() * chooseArr.length)];

const result = await getResult(reacted, botChoice);
await m.clearReactions();

embed
.setDescription("")
.addField(result, `${reacted} vs ${botChoice}`)
m.edit(embed)

function getResult(me, clientChosen) {
    if ((me === "🗻" && clientChosen === "✂") ||
    (me === "📰" && clientChosen === "🗻") ||
    (me === "✂" && clientChosen === "📰")) {
return "You won!";
    } else if (me === clientChosen) {
        return "We tied!";
    } else {
        return "You lost!";
    }
}

    }
}
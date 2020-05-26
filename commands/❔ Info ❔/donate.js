const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "donate",
    category: "❔ Info ❔",
    description: "Donate to us if you really want to, know that adding the bot to your servers is enough!",
    usage: "`c!donate`",
    run: async ( client,message, args) => {

let embed = new MessageEmbed()
.setColor("RANDOM")
.setTitle("Donate")
.setURL("https://www.patreon.com/user?u=36083210")
.setDescription("Adding the bot is enough, if you wish to support us you can!", message.guild.iconURL())
.addField("Patron", "https://www.patreon.com/user?u=36083210", true)
.setFooter(`${message.author.username}`)
message.channel.send(embed)
    }
}
const { getMember, formatDate } = require("../../functions.js")
const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "bins",
    category: "info",
    description: "Where you can put large ammounts of text without spamming in the server.",
    run: async ( client,message, args) => {

        const embed = new MessageEmbed()

    .setFooter(message.author.tag)
    .setThumbnail(message.author.AvatarURL)
    .setColor(roleColor)
    .addField("**Reccomended bin:**", "https://sourceb.in/")
    .setTimestamp()

    message.channel.send(embed)
    

    }

}
const { MessageEmbed } = require('discord.js');

module.exports = {
    name: "bins",
    category: "info",
    description: "Where you can put large ammounts of text without spamming in the server.",
    run: async ( client,message, args) => {

        const embed = new MessageEmbed()

    .setFooter(member.displayName)
    .setThumbnail(member.user.displayAvatarURL)
    .setColor(member.displayHexColor === "#000000" ? "#ffffff" : member.displayHexColor)
    .addField("**Reccomended bin:**", "https://sourceb.in/")
    .setTimestamp()

    message.channel.send(embed)
    

    }

}
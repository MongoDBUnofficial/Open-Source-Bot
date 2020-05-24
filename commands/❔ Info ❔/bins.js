const { getMember, formatDate } = require("../../functions.js")
const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "bins",
    category: "❔ Info ❔",
    description: "Where you can put large ammounts of text without spamming in the server.",
    usage: "`c!bins`",
    run: async ( client,message, args) => {

        if (message.deletable) message.delete();

        const roleColor = message.guild.me.displayHexColor;

        const embed = new MessageEmbed()

    .setFooter(message.author.tag)
    .setColor(roleColor)
    .addField("**Code Bins**", "https://sourceb.in/ \n https://mystb.in \n https://hasteb.in/ \n https://pastebin.com/")
    .setTimestamp()
    .setAuthor(message.author.username , message.author.displayAvatarURL({dynamic: true}))


message.channel.send(embed)


    

    }

}
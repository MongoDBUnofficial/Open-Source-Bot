const { getMember, formatDate } = require("../../functions.js")
const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "uptime",
    category: "info",
    description: "Recieve the bots uptime.",
    run: async ( client,message, args) => {

        if (message.deletable) message.delete();

        const roleColor = message.guild.me.displayHexColor;

        const embed = new MessageEmbed()

    .setColor(roleColor)
    .setTitle("Uptime")
    .setDescription(client.uptime)
    .setTimestamp()

    message.channel.send(embed)
    

    }

}
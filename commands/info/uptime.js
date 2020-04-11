const { getMember, formatDate } = require("../../functions.js")
const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "uptime",
    category: "info",
    description: "Recieve the bots uptime.",
    run: async ( client,message, args) => {

        if (message.deletable) message.delete();

        const roleColor = message.guild.me.displayHexColor;

        let seconds = ms / 1000;
        ms = (seconds % 1) * 1000;
        seconds -= (ms / 1000);
        let minutes = seconds / 60;
        seconds = (minutes % 1) * 60;
        minutes -= (seconds / 60);
        let hours = minutes / 60;
        minutes = (hours % 1) * 60;
        hours -= (minutes / 60);
        let time = ""+hours+":"+minutes+":"+seconds+"."+ms;

        const embed = new MessageEmbed()

    .setColor(roleColor)
    .setTitle("Uptime")
    .setDescription(time)
    .setTimestamp()

    message.channel.send(embed)
    

    }

}
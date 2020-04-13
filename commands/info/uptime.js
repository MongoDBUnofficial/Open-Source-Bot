const { getMember, formatDate } = require("../../functions.js")
const { MessageEmbed } = require("discord.js");
const moment = require("moment");

module.exports = {
    name: "uptime",
    category: "info",
    description: "Recieve the bots uptime.",
    run: async ( client,message, args) => {

        if (message.deletable) message.delete();

        const roleColor = message.guild.me.displayHexColor;

        let ms = client.uptime

        let seconds = ms / 1000;
        ms = Math.round((seconds % 1) * 1000);
        seconds -= (ms / 1000);
        let minutes = seconds / 60;
        seconds = (minutes % 1) * 60;
        minutes -= (seconds / 60);
        let hours = minutes / 60;
        minutes = (hours % 1) * 60;
        hours -= (minutes / 60);
        let time = minutes+":"+seconds+"."+ms;
        time = hours += ":" + moment(time, "mm:ss.SSS").format("mm:ss.SSS");

        const embed = new MessageEmbed()

    .setColor(roleColor)
    .setTitle("Uptime")
    .setDescription(time)
    .setTimestamp()
    .setColor('GREEN')

    message.channel.send(embed)
    

    }

}
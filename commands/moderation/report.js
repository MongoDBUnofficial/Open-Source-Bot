const { MessageEmbed } = require('discord.js');
const { stripIndents } = require("common-tags")

module.exports = {
    name: "report",
    category: "moderation",
    description: "Reports a member",
    usage: "<mention | id>",
    run: async ( client,message, args) => {

        if (message.deletable) message.delete();
    
let rMember = message.mentions.members.first() || message.guild.members.get(ards[0]);

if (!rMember)
return message.reply("Oops! I couldn't find that person!").then(delete({ timeout: 3000}))

if (rMember.hasPermission("BAN_MEMBERS") || rMember.user.bot)
return message.reply ("You can't report that member!").then(delete({ timeout: 3000}))

if (!args[1])
return message.channel.send("Please provide a reason for the report!").then(delete({ timeout: 3000}))

const channel = message.guild.channels.find(channel => channel.name === "reports");

if (!channel)
return message.channel.send("This server isn't set up correctly for reports, please create a #reports channel!")

const embed = new MessageEmbed()
.setColor("#ff0000")
.setTimestamp()
.setFooter(message.guild.name, message.guild.iconURL)
.setAuthor("Reported member", rMember.user.displayAvatarURL)
.setDescription(stripIndents`**> Reported Member:** ${rMember}
**> Reported by:** ${message.member} (${message.member.id})
**> Reported in:** ${message.channel}
**> Reason:** ${args.slice(1).join(" ")}`)

channel.send(embed)

    }

}
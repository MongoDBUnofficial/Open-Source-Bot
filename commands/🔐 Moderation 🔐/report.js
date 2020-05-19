const { MessageEmbed } = require('discord.js');
const { stripIndents } = require("common-tags")

module.exports = {
    name: "report",
    category: "🔐 Moderation 🔐",
    description: "Reports a member",
    usage: "`c!report <mention>`",
    run: async ( client,message, args) => {

        if (message.deletable) message.delete();
    
let rMember = message.mentions.members.first() || message.guild.members.cache.get(args[0]);

if (!rMember)
return message.reply("Oops! I couldn't find that person!").then(msg => msg.delete({ timeout: 3000}))

if (rMember.hasPermission("KICK_MEMBERS") || rMember.user.bot)
return message.reply ("You can't report that member!").then(msg => msg.delete({ timeout: 3000}))

if (!args[1])
return message.channel.send("Please provide a reason for the report!").then(msg => msg.delete({ timeout: 3000}))

const channel = message.guild.channels.cache.find(channel => channel.name === "reports");

if (!channel)
return message.channel.send("This server isn't set up correctly for reports, please create a #reports channel!")

const embed = new MessageEmbed()
.setColor("#ff0000")
.setTimestamp()
.setFooter(message.guild.name, message.guild.iconURL())
.setAuthor("Reported member", rMember.user.displayAvatarURL())
.setDescription(    `**Reported Member:** 
${rMember} (${rMember.id})
**Reported by:
**${message.member} (${message.member.id})
**Reported in:**
${message.channel}
**Reason:** 
${args.slice(1).join(" ")}`)

channel.send(embed)

message.reply("Report has been passed on to the admins!").then(msg => msg.delete({ timeout: 3000}))

    }

}   
const { MessageEmbed } = require('discord.js');
const { stripIndents } = require("common-tags")
const { promptMessage } = require("../../functions")

module.exports = {
    name: "kick",
    category: "🔐 Moderation 🔐",
    description: "Kicks a member.",
    usage: "`c!kick <mention>`",
    run: async ( client,message, args) => {

const logChannel = message.guild.channels.cache.find(c => c.name === "logs") || message.channel;
    
if (message.deletable) message.delete();

//No mention
if (!args[0]) {
    return message.reply("❌ Please provide a user to kick!")
    .then(msg => msg.delete({ timeout: 3000}))
}

//No reason
if  (!args[1]) {
    return message.reply("❌ Please provide a reason to kick.")
    .then(msg => msg.delete({ timeout: 3000}))
}

//No author permissions
if (!message.member.hasPermission("KICK_MEMBERS")) {
    return message.reply("❌ You do not have permission to kick members.")
    .then(msg => msg.delete({ timeout: 3000}))
}

// No bot permission
if (!message.guild.me.hasPermission("KICK_MEMBERS")) {
    return message.reply("❌ I don't have permission to kick members. Make sure the bot has admin permissions.")
}

const toKick = message.mentions.members.first() || message.guild.members.cache.get(args[0]);

// no member found
if (!toKick) {
    return message.reply("❌ Couldn't find that member. Please try again.")
    .then(msg => msg.delete({ timeout: 3000}))
}

//Cant kick yourself
if (message.author.id === toKick.id) {
    return message.reply("❌ You can't kick yourself!")
    .then(msg => msg.delete({ timeout: 3000}))
}

//unkickable
if (!toKick.kickable) {
    return message.reply("❌ Cannot kick an unkickable member.")
    .then(msg => msg.delete({ timeout: 3000}))
}

//cant kick a member with kick permissions
if (toKick.hasPermission("KICK_MEMBERS")) {
   return message.reply("❌ You cannot kick a member that has kick permissions!")
    .then(msg => msg.delete({ timeout: 3000}))
}

const embed = new MessageEmbed()
.setColor("#ff0000")
.setFooter(message.member.displayName, message.author.displayAvatarURL)
.setTimestamp()
.setDescription(stripIndents`**> Kicked member:** ${toKick} (${toKick.id})
**> Kicked by:** ${message.author} (${message.author.id})
**> Reason:** ${args.slice(1).join(" ")}`)
.setAuthor(message.author.username , message.author.displayAvatarURL())
if(message.author.avatarURL().includes("a_")) {
    embed.setAuthor(message.author.username , message.author.displayAvatarURL({ format: 'gif' }))
}

const promptEmbed = new MessageEmbed()
.setColor("GREEN")
.setAuthor("This verification becomes invalid after 30 seconds.")
.setDescription(`Do you want to kick ${toKick}?`)
.setAuthor(toKick.username , toKick.displayAvatarURL())
if(toKick.avatarURL().includes("a_")) {
    embed.setAuthor(message.author.username , message.author.displayAvatarURL({ format: 'gif' }))
}

message.channel.send(promptEmbed).then(async msg => {

const emoji = await promptMessage(msg, message.author, 30, ["✅","❌"]);

if (emoji === "✅") {
    msg.delete()

    toKick.kick(args.slice(1).join(" "))
    .catch(err => {
        if (error) return message.channel.send('The bot has had an error. Please report to developer.')

    });

    logChannel.send(embed)
}

else if (emoji === "❌") {
    msg.delete()

    message.reply("Kick Cancelled.").then(msg => msg.delete({ timeout: 3000}))
}

});

    }
}
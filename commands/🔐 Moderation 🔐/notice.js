const { MessageEmbed } = require('discord.js');
const { stripIndents } = require("common-tags")

module.exports = {
    name: "notice",
    category: "🔐 Moderation 🔐",
    description: "If the server has a channel correctly named 'notice-board' it will send what the user said in an embed, very similar to the announce command. It will only use here and not everyone.",
    usage: " `c!notice <channel> <notice>`",
    run: async ( client,message, args) => {

        if (message.deletable) message.delete();

        const roleColor = message.guild.me.displayHexColor;


if (!message.member.hasPermission("MANAGE_MESSAGES")) 
  return  message.reply("You must have manage messages permission to set a notice!").then(msg => msg.delete({ timeout: 3000})) 

if (!args[1])
return message.channel.send(`Please use the correct format!
**Usage:** c!notice <channel> <notice>`).then(msg => msg.delete({ timeout: 3000}))

if(!args[0].match(/^<#(\d+)>$/)) {
  return message.channel.send(`Please use the correct format!
  **Usage:** c!notice <channel> <notice>`).then(msg => msg.delete({ timeout: 5000})) 
  }

let sendchannel = message.mentions.channels.first()
if(!sendchannel) return message.channel.send(`I could not find that channel in the guild!`)





const embed = new MessageEmbed()
.setColor(roleColor)
.setTimestamp()
.setTitle("Notice")
.setFooter(message.guild.name, message.guild.iconURL())
.setAuthor(message.author.username , message.author.displayAvatarURL())
.setDescription(`${args.slice(1).join(" ")}`)
.setAuthor(message.author.username , message.author.displayAvatarURL())
if(message.author.avatarURL().includes("a_")) {
    embed.setAuthor(message.author.username , message.author.displayAvatarURL({ format: 'gif' }))
}

sendchannel.send(`@here`, embed)

message.channel.send("Notice made by user: " + message.author.username )

    }

}  
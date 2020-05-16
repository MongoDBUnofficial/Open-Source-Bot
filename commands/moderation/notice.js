const { MessageEmbed } = require('discord.js');
const { stripIndents } = require("common-tags")

module.exports = {
    name: "notice",
    category: "moderation",
    description: "If the server has a channel correctly named 'notice-board' it will send what the user said in an embed, very similar to the announce command. It will only use here and not everyone.",
    usage: "c!notice <your message> (CAN INCLUDE MULTIPLE LINES WITH SHIFT + ENTER AND SUPPORTS MARKDOWN)",
    run: async ( client,message, args) => {

        if (message.deletable) message.delete();

        const roleColor = message.guild.me.displayHexColor;


if (!message.member.hasPermission("MANAGE_MESSAGES")) 
  return  message.reply("You don't have permissions to send out a notice!").then(msg => msg.delete({ timeout: 3000})) 

if(!args[0].match(/^<#(\d+)>$/)) {
  return message.channel.send(`Please use the correct format!
  **Usage:** c!announce <channel> <announcement>`).then(msg => msg.delete({ timeout: 5000})) 
  }

let sendchannel = message.mentions.channels.first()
if(!sendchannel) return message.channel.send(`I could not find that channel in the guild!`)

if (!args[1])
return message.channel.send("Please set a notice!").then(msg => msg.delete({ timeout: 3000}))



const embed = new MessageEmbed()
.setColor(roleColor)
.setTimestamp()
.setTitle("Notice")
.setFooter(message.guild.name, message.guild.iconURL())
.setAuthor(message.author.username , message.author.displayAvatarURL())
.setDescription(`${args.slice(1).join(" ")}`)

sendchannel.send(`@here`, embed)

message.channel.send("Notice made by user: " + message.author.username )

    }

}  
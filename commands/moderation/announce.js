const { MessageEmbed } = require('discord.js');
const { stripIndents } = require("common-tags")

module.exports = {
    name: "announce",
    category: "moderation",
    description: "If the server has a channel correctly named 'Announcements' the bot will announce what the user says.",
    usage: "c!announce <your message> (CAN INCLUDE MULTIPLE LINES WITH SHIFT + ENTER AND SUPPORTS MARKDOWN)",
    run: async ( client,message, args) => {

        if (message.deletable) message.delete();

        const roleColor = message.guild.me.displayHexColor;


if (!message.member.hasPermission("MANAGE_MESSAGES")) 
  return  message.reply("You don't have permissions to announce!").then(msg => msg.delete({ timeout: 3000})) 

  if(!args[0].startsWith("<#") && !args[0].endsWith(">")) 
  return message.channel.send(`Please use the correct format!
  **Usage:** c!announce <channel> <announcement>`)

if(args[0] !== message.mentions.channels.first())
return message.channel.send(`Please use the correct format to announce.
**Usage:** c!announce <channel> <announcement>`).then(msg => msg.delete({ timeout: 3000}))

let sendchannel = message.mentions.channels.first()
if(!sendchannel) return message.channel.send(`I could not find that channel in the guild!`)

const embed = new MessageEmbed()
.setColor(roleColor)
.setTimestamp()
.setFooter(message.guild.name, message.guild.iconURL())
.setAuthor(message.author.username , message.author.displayAvatarURL())
.setDescription(`${args.slice().join(" ")}`)

sendchannel.send(`@everyone`, embed)

message.channel.send(`Announcement made by user: ${message.author.username}
In: ${sendchannel}`)

    }

}  
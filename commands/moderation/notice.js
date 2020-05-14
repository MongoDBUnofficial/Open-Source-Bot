const { MessageEmbed } = require('discord.js');
const { stripIndents } = require("common-tags")

module.exports = {
    name: "notice",
    category: "moderation",
    description: "If the server has a channel correctly named 'notice-board' it will send what the user said in an embed, very similar to the announce command.",
    usage: "c!announce <your message> (CAN INCLUDE MULTIPLE LINES WITH SHIFT + ENTER AND SUPPORTS MARKDOWN)",
    run: async ( client,message, args) => {

        if (message.deletable) message.delete();

        const roleColor = message.guild.me.displayHexColor;


if (!message.member.hasPermission("MANAGE_MESSAGES")) 
  return  message.reply("You don't have permissions to announce!").then(msg => msg.delete({ timeout: 3000})) 




if (!args[1])
return message.channel.send("Please announce something!").then(msg => msg.delete({ timeout: 3000}))

const channel = message.guild.channels.cache.find(channel => channel.name === "notice");

if (!channel)
return message.channel.send("You need an announcements channel to announce with this bot! Create a channel named announcements.")

const embed = new MessageEmbed()
.setColor(roleColor)
.setTimestamp()
.setTitle("Notice")
.setFooter(message.guild.name, message.guild.iconURL())
.setAuthor(message.author.username , message.author.displayAvatarURL())
.setDescription(`${args.slice().join(" ")}`)

channel.send(`@here`, embed)

message.channel.send("Announcement made by user: " + message.author.username )

    }

}  
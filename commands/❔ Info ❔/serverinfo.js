const { MessageEmbed } = require("discord.js");
const { formatDate } = require("../../functions.js")
const moment = require("moment")
require("moment-duration-format")

module.exports = {
    name: "serverinfo",
    category: "❔ Info ❔",
    description: "Recieve info about this server.",
    usage: "`c!serverinfo`",
    run: async ( client,message, args) => {

        const roleColor = message.guild.me.displayHexColor;

        const joined = formatDate(client.user.joinedAt);

        const guildcreated = formatDate(message.guild.createdAt)

        const serverLevel = ["None","Low","Medium","High","Max"]

const embed = new MessageEmbed()
.setThumbnail(message.guild.iconURL())
.setAuthor(message.guild.name + "'s Information")
.addFields(

    { name : 'Server Member Count:', value : `\`\`\`${message.guild.memberCount} Members\`\`\``, inline : true},
    { name : 'Server Name:', value : `\`\`\`${message.guild.name}\`\`\``, inline : true},
    { name : 'Bot Joined At:', value : `\`\`\`${joined}\`\`\``},
    { name : 'Created At:', value : `\`\`\`${guildcreated}\`\`\``},
    { name : 'Channel Count:', value : `\`\`\`${message.guild.channels.cache.size}\`\`\``, inline : true},
    { name : 'Role Count:', value : `\`\`\`${message.guild.roles.cache.size}\`\`\``, inline : true},
    { name : 'Server Region:', value : `\`\`\`${message.guild.region}\`\`\``, inline : true},
    { name : 'Server ID:', value : `\`\`\`${message.guild.id}\`\`\``},
    { name : 'Emoji Count:', value : `\`\`\`${message.guild.emojis.cache.size}\`\`\``, inline : true},
    { name : 'Verification Level:', value : `\`\`\`${message.guild.verificationLevel}\`\`\``, inline : true}

)
.setColor(roleColor)
.setFooter(message.guild.name)
.setTimestamp()
.setAuthor(message.guild.name + "'s Information", message.guild.iconURL())
if(message.guild.iconURL().includes("a_")) {
    embed.setAuthor(message.guild.name + "'s Information", message.guild.iconURL({ format: 'gif' }))
}

message.channel.send(embed)

    }
}
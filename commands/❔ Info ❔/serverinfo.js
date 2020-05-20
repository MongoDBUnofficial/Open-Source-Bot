const { MessageEmbed } = require("discord.js");
const { formatDate } = require("../../functions.js")

module.exports = {
    name: "serverinfo",
    category: "❔ Info ❔",
    description: "Recieve info about this server.",
    usage: "`c!serverinfo`",
    run: async ( client,message, args) => {

        const roleColor = message.guild.me.displayHexColor;

        const joined = formatDate(client.user.joinedAt);

        const guildcreated = formatDate(message.guild.createdAt)

const embed = new MessageEmbed()
.setThumbnail(message.guild.iconURL())
.setAuthor(message.guild.name)
.addFields(

    { name : 'Server Member Count:', value : `\`\`\`${message.guild.memberCount} Members\`\`\``, inline: true},
    { name : 'Server Name:', value : `\`\`\`${message.guild.name}\`\`\``, inline: true },
    { name : 'Bot Joined At:', value : `\`\`\`${joined}\`\`\``},
    { name : 'Created At:', value : `\`\`\`${guildcreated}\`\`\``},
    { name : 'Channel Count:', value: `\`\`\`${message.guild.channels.cache.size}\`\`\``, inline: true},
    { name : 'Role Count:', value: `\`\`\`${message.guild.roles.cache.size}\`\`\``, inline: true},
    { name : 'Server Region:', value: `\`\`\`${message.guild.region}\`\`\``, inline: true}

)
.setColor(roleColor)
.setFooter(message.guild.name)
.setTimestamp()

message.channel.send(embed)

    }
}
const { getMember, formatDate } = require("../../functions.js")
const { MessageEmbed } = require("discord.js");
const { stripIndents } = require("common-tags");

module.exports = {
    name: "whois",
    aliases: ["userinfo","user","who"],
    category: "info",
    description: "Brings back user information.",
    usage: "c!whois [mention]",
    run: async ( client,message, args) => {

        if (message.deletable) message.delete();

const member = getMember(message, args.join(" "))

// Member Variables
const joined = formatDate(member.joinedAt);
const roles = member.roles.cache
    .filter(r => r.id !== message.guild.id)
    .map(r => r)
    .join(", ") || "none";

    // User Variables
    const created = formatDate(member.user.createdAt)

    const embed = new MessageEmbed()
    .setFooter(member.displayName)
    .setThumbnail(member.user.displayAvatarURL)
    .setColor(member.displayHexColor === "#000000" ? "#ffffff" : member.displayHexColor)
    .addField('Member Information', stripIndents`**Display name:** ${member.displayName}
    **Joined at:** ${joined}
    **Roles:** ${roles}`, true)

    .addField('User Information', stripIndents`**ID:** ${member.user.id}
    **Username:** ${member.user.username}
    **Discord Tag:** ${member.user.tag}
    **Created at:** ${created}`, true)

    .setTimestamp()

    if (member.user.presence.game)
    embed.addField('Currently playing', `**Name:** ${message.user.presence.game.name}`)

    message.channel.send(embed)
    }

}
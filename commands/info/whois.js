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

        const whoismember = message.mentions.users.first() || message.author;
        const member = message.guild.member(whoismember);
        let status = '';
        if (whoismember.presence.status === 'dnd'){
          status = 'Do Not Disturb';
            } else if (whoismember.presence.status === 'online'){
          status = 'Online';
            } else if (whoismember.presence.status === 'offline'){
          status = 'Offline';
            } else if (whoismember.presence.status === 'idle'){
          status = 'Idle';
            } else if (whoismember.presence.status === 'transparent'){
          status = 'Transparent';
            }
        const whoisEmbed = new Discord.MessageEmbed()
        .setAuthor('USER INFORMATION')
        .addField('Username', `\`\`\`${whoismember.tag}\`\`\``, true)
        .addField('User ID', `\`\`\`${whoismember.id}\`\`\``, true)
        .addField('Server', `\`\`\`${message.guild.name}\`\`\``)
        .addField('Nickname', `\`\`\`${member.nickname ? member.nickname : 'No Nickname'}\`\`\``)
        .addField('Status', `\`\`\`${status}\`\`\``)
        .addField('Created At', `\`\`\`${whoismember.createdAt.toLocaleDateString()}\`\`\``, true)
        .addField('Joined At', `\`\`\`${member.joinedAt.toLocaleDateString()}\`\`\``, true)
        .setFooter('Say !membercommands for a list of commands.', message.guild.iconURL())
        .setImage('https://cdn.discordapp.com/attachments/657250830310965259/657252699208810517/unknown.png')
        .setThumbnail(whoismember.displayAvatarURL())
        .setTimestamp()
        .setColor(whoismember.displayHexColor === "#000000" ? "#ffffff" : whoismember.displayHexColor)
        message.channel.send(whoisEmbed)
        return;
    }

}
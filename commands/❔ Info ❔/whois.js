const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "whois",
    aliases: ["userinfo","user","who"],
    category: "❔ Info ❔",
    description: "Brings back user information.",
    usage: "`c!whois [mention]`",
    run: async ( client,message, args) => {

        const roleColor = message.guild.me.displayHexColor;
        
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
        const whoisEmbed = new MessageEmbed()
        .addField('Username', `\`\`\`${whoismember.tag}\`\`\``, true)
        .addField('User ID', `\`\`\`${whoismember.id}\`\`\``, true)
        .addField('Server', `\`\`\`${message.guild.name}\`\`\``)
        .addField('Nickname', `\`\`\`${member.nickname ? member.nickname : 'No Nickname'}\`\`\``)
        .addField('Status', `\`\`\`${status}\`\`\``)
        .addField('Created At', `\`\`\`${whoismember.createdAt.toLocaleDateString()}\`\`\``, true)
        .addField('Joined At', `\`\`\`${member.joinedAt.toLocaleDateString()}\`\`\``, true)
        .setFooter(message.guild.name, message.guild.iconURL())
        .setThumbnail(whoismember.displayAvatarURL({dynamic: true}))
        .setTimestamp()
        .setColor(roleColor)
        .setAuthor(whoismember.username , whoismember.displayAvatarURL({dynamic: true}))

        message.channel.send(whoisEmbed)
        return;
    }

}
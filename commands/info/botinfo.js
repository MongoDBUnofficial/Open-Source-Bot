const { MessageEmbed } = require('discord.js');
const { stripIndents } = require("common-tags")
const { formatDate } = require("../../functions.js")

module.exports = {
    name: "botinfo",
    category: "info",
    description: "Returns with bot stats.",
    run: async ( client,message, args) => {

        if (message.deletable) message.delete(); 
        const roleColor = message.guild.me.displayHexColor;

        const botcreated = formatDate(client.user.createdAt)
        const joined = formatDate(client.user.joinedAt);

const embed = new MessageEmbed()
.setTitle("Bot Information")
.setURL('https://discordapp.com/api/oauth2/authorize?client_id=697963363476570142&permissions=8&scope=bot')
.setAuthor(client.user.username, 'https://i.imgur.com/xifTG7z.png')
.setThumbnail('https://discord.js.org/static/logo-square.png')
.addFields(

    { name : 'Users:', value : `\`\`\`${client.users.cache.size} users\`\`\``},
    { name : 'Servers:', value : `\`\`\`${client.guilds.cache.size} servers\`\`\``},
    { name : 'Tag:', value : `\`\`\`${client.user.tag}\`\`\``, inline: true},
    { name : 'Created At:', value : `\`\`\`${botcreated}\`\`\``, inline: true},

)
.addFields(

    { name : 'Joined this server at:', value: `\`\`\`${joined}\`\`\``, inline: true },
    { name : 'Coded with:', value: '```Javascript (discord.js)```', inline: true}, 
    { name : 'Support Server:', value: '```https://discord.gg/Y5muae4```', inline: true}, 
    { name : '', value: 'https://discord.gg/Y5muae4', inline: true}, 

    )
.setFooter("Heroku Hosting")
.setTimestamp()
.setImage('https://cdn.discordapp.com/attachments/657250830310965259/657252699208810517/unknown.png')

message.channel.send(embed)

    }
}

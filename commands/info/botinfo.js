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

    { name : 'Users:', value : `${client.users.cache.size} users`},
    { name : 'Servers:', value : `${client.guilds.cache.size} servers`},
    { name : 'Tag:', value : `${client.user.tag}`, inline: true},
  
    { name : 'Created At:', value : `${botcreated} `, inline: true},

)
.addField(`Users: ${client.users.cache.size}

Servers: ${client.guilds.cache.size}`)

.addField('Joined this server at:', `${joined}`)
.setColor(roleColor)


message.channel.send(embed)

    }
}

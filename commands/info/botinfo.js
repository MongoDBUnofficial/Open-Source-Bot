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

const embed = new MessageEmbed()
.setTitle("Bot Information")
.addFields(

    { name : 'Users:', value : `${client.users.cache.size} users`},
    { name : 'Servers:', value : `${client.guilds.cache.size} servers`},
    { name : 'Tag:', value : `${client.user.tag}`, inline: true},
    { name : 'Created At:', value : `${botcreated} `, inline: true},

)
.setColor(roleColor)


message.channel.send(embed)

    }
}

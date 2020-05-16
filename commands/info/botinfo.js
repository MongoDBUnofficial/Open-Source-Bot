const { getMember, formatDate } = require("../../functions.js")
const { MessageEmbed } = require("discord.js");
const moment = require("moment");

module.exports = {
    name: "botinfo",
    category: "info",
    description: "Returns with bot stats.",
    usage: "`c!botinfo`",
    run: async ( client,message, args) => {

        if (message.deletable) message.delete(); 
        const roleColor = message.guild.me.displayHexColor;

        const botcreated = formatDate(client.user.createdAt)
        const joined = formatDate(client.user.joinedAt);


        let ms = client.uptime

        let seconds = ms / 1000;
        ms = Math.round((seconds % 1) * 1000);
        seconds -= (ms / 1000);
        let minutes = seconds / 60;
        seconds = (minutes % 1) * 60;
        minutes -= (seconds / 60);
        let hours = minutes / 60;
        minutes = (hours % 1) * 60;
        hours -= (minutes / 60);
        let time = minutes+":"+seconds+"."+ms;
        time = hours += ":" + moment(time, "mm:ss.SSS").format("mm:ss.SSS");



const embed = new MessageEmbed()
.setTitle("Bot Information")
.setURL('https://discordapp.com/api/oauth2/authorize?client_id=697963363476570142&permissions=8&scope=bot')
.setAuthor(client.user.username, 'https://i.imgur.com/xifTG7z.png')
.setThumbnail('https://discord.js.org/static/logo-square.png')
.addFields(

    { name : 'Users:', value : `\`\`\`${client.users.cache.size} users\`\`\``, inline: true},
    { name : 'Servers:', value : `\`\`\`${client.guilds.cache.size} servers\`\`\``, inline: true },
    { name : 'Tag:', value : `\`\`\`${client.user.tag}\`\`\``},
    { name : 'Created At:', value : `\`\`\`${botcreated}\`\`\``},

)
.addFields(

    { name : 'Joined this server at:', value: `\`\`\`${joined}\`\`\``, inline: true  },
    { name : 'Support Server:', value: `\`\`\`Y5muae4\`\`\``, inline: true},
    { name : 'Coded with:', value: `\`\`\`Javascript (discord.js)\`\`\``}, 
    { name : 'Uptime:', value: `\`\`\`${time}\`\`\``}, 

    )
.setFooter("Heroku Hosting")
.setTimestamp()
.setImage('https://cdn.discordapp.com/attachments/657250830310965259/657252699208810517/unknown.png')

message.channel.send(embed)

    }
}

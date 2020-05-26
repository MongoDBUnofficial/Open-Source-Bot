const { MessageEmbed } = require('discord.js');

module.exports = {
    name: "say",
    category: "🎉 Fun 🎉",
    description: "Messages through the bot.",
    usage: "`c!say <message>`",
    run: async ( client,message, args) => {

        if (message.deletable) message.delete();
    
        if (args.length <1) return (await message.reply("Nothing to say!")).attachments(m => m.delete(5000));
        
        const roleColor = message.guild.me.displayHexColor;

const embed = new MessageEmbed()
        .setColor(roleColor)
        .setDescription(args.join(" "))
        .setAuthor(message.author.username , message.author.displayAvatarURL({dynamic: true}))

        message.channel.send(embed)
        
    }

}
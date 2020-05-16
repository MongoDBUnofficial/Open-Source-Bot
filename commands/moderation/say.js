const { MessageEmbed } = require('discord.js');

module.exports = {
    name: "say",
    category: "moderation",
    description: "Messages through the bot.",
    usage: "`c!say <message>`",
    run: async ( client,message, args) => {

        if (message.deletable) message.delete();
    
        if (args.length <1) return (await message.reply("Nothing to say!")).attachments(m => m.delete(5000));
        
        const roleColor = message.guild.me.displayHexColor;

        message.channel.send(new MessageEmbed()
        .setAuthor(message.author.username , message.author.displayAvatarURL())
        .setColor(roleColor)
        .setDescription(args.join(" ")));
        
    }

}
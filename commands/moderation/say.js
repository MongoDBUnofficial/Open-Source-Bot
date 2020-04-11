const { MessageEmbed } = require('discord.js');

module.exports = {
    name: "say",
    aliases: ["bc", "broadcast"],
    category: "moderation",
    description: "Messages through the bot.",
    run: async ( client,message, args) => {

        if (message.deletable) message.delete();
    
        if (args.length <1) return (await message.reply("Nothing to say!")).attachments(m => m.delete(5000));
        
        const roleColor = message.guild.me.displayHexColor;

        message.channel.send(new MessageEmbed()
        .setFooter(message.author.name)
        .setColor(roleColor)
        .setDescription(args.join(" ")));
        
    }

}
const { MessageEmbed } = require('discord.js');
const { stripIndents } = require("common-tags")
const { formatDate } = require("../../functions.js")

module.exports = {
    name: "dashcraftfaq",
    description: "A FAQ For the Dashcraft discord server.",
    run: async ( client,message, args) => {
        if(message.guild.id !== '644764850706448384') {

message.reply("This command is only for a certain server. ")
 return;
        }

        const promptEmbed = new MessageEmbed()
        .setColor("GREEN")
        .setAuthor(`This verification becomes invalid after 30s.`)
        .setDescription(`Do you want to ban ${toBan}?`)

    // Send the message
    await message.channel.send(promptEmbed).then(async msg => {
        // Await the reactions and the reactioncollector
        const emoji = await promptMessage(msg, message.author, 30, ["✅", "❌"]);

        // Verification stuffs
        if (emoji === "✅") { 
           

            message.edit(promptMessage)
            .setTitle("Heroku Dyno Help")
            .setDescription("test")

}
 else if (emoji === "❌") {

    message.edit(promptMessage)
    .setTitle("no u")
    .setDescription("no u")

        }
    });
     
    }
}
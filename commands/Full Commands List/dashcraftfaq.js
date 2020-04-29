const { MessageEmbed } = require('discord.js');
const { stripIndents } = require("common-tags")
const { formatDate, promptMessage } = require("../../functions.js")

module.exports = {
    name: "dashcraftfaq",
    description: "A FAQ For the Dashcraft discord server.",
    run: async ( client,message, args) => {
        if(message.guild.id !== '644764850706448384') {

message.reply("This command is only for a certain server. ")
 return;
        }

        const promptEmbed = new MessageEmbed()
        .setTitle("Dashcraft FAQ")
        .setColor("GREEN")
        .setAuthor(`test`)
        .setDescription(`pick an emoji test`)

    // Send the message
    const m = await message.channel.send(promptEmbed).then(async msg =>{
        // Await the reactions and the reactioncollector
        const emoji = await promptMessage(msg, message.author, 30, ["✅", "❌"]);

        // Verification stuffs
        if (emoji === "✅") { 
           

}
 else if (emoji === "❌") {



        }
    });
     
    }
}
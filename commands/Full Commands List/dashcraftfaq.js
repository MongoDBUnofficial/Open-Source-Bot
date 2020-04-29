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
        .setThumbnail(message.guild.iconURL)
        .addField(`**Select an emoji from the key
        for more information about it.**`)
        .addFields(
            { name: "Who is DashCraft?", value: "🎟", inline: true},
            { name: "What is this Discord server for?", value: "🦺", inline: true},
            { name: "My Heroku isn't working. How do I fix it?", value: "🟪", inline: true},
        )
        .setColor("GREEN")
        .setDescription(`pick an emoji test`)

    // Send the message
    const m = await message.channel.send(promptEmbed).then(async msg =>{
        // Await the reactions and the reactioncollector
        const emoji = await promptMessage(msg, message.author, 30, ["🎟", "🟪", "🦺"]);

        // Verification stuffs
        if (emoji === "🎟") { 
           
            msg.delete()

            const dashcraftEmbed = new MessageEmbed()
            .setTitle("Who is DashCraft?")
            .setDescription("Dashcraft, or Poryafm12¹ on Discord is the creator of http://youtube.com/dashcraft123")

            message.channel.send(dashcraftEmbed)
}
 else if (emoji === "🟪") {

msg.delete()

const herokuEmbed = new MessageEmbed()
.setTitle("Heroku Help")
.setDescription(`First, make sure your profile says
\`\`\`Worker: node index.js\`\`\`
After that, do the following.
\`\`\`Go to Deploy and scroll to the bottom and click Deploy Branch.\`\`\`
After that, wait a bit and then
go to resouces and your dyno's should be there.
If not, get help in the Support channel.`)

message.channel.send(herokuEmbed)

        }
        else if (emoji === "🦺") {

            msg.delete()
            
            const herokuEmbed = new MessageEmbed()
            .setTitle("What is this discord server for?")
            .setDescription(`This server is for you to get
            help with your code and the official chat server
            for the DashCraft YouTube channel.`)
            
            message.channel.send(herokuEmbed)
            
                    }
    });
     
    }
}
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

        const roleColor = message.guild.me.displayHexColor;

        const promptEmbed = new MessageEmbed()
        .setTitle("Dashcraft FAQ")
        .setThumbnail('https://i.imgur.com/n7iYhCD.png')
        .addFields(
            { name: "Who is DashCraft?", value: "🎟", inline: true},
            { name: "What is this Discord server for?", value: "🏴", inline: true},
            { name: "My Heroku isn't working. How do I fix it?", value: "🟪", inline: true},
            { name: "How can I apply for staff?", value: "🦺", inline: true},
        )
        .setColor(roleColor)
        .setDescription(`**Select an emoji from the key
        for more information about it.**`)

    // Send the message
    const m = await message.channel.send(promptEmbed).then(async msg =>{
        // Await the reactions and the reactioncollector
        const emoji = await promptMessage(msg, message.author, 30, ["🎟", "🟪", "🦺", "🏴"]);

        // Verification stuffs
        if (emoji === "🎟") { 
           
            msg.delete()

            const dashcraftEmbed = new MessageEmbed()
            .setTitle("Who is DashCraft?")
            .setDescription("Dashcraft, or Poryafm12¹ on Discord is the creator of http://youtube.com/dashcraft123")
            .setColor(roleColor)

            message.channel.send(dashcraftEmbed)
}
 else if (emoji === "🟪") {

msg.delete()

const herokuEmbed = new MessageEmbed()
.setTitle("Heroku Help")
.setColor(roleColor)
.setDescription(`First, make sure your profile says
\`\`\`Worker: node index.js\`\`\`
**Note: index.js is known as default bot file (as it mentioned in the video), but if your main bot file name is anything else, replace index.js to your main bot file. for example if my main bot file name is bot.js, I will put this as my Procfile: \`Worker: node bot.js\`**

**Now, do the following.**

After that, go to deploy tab on Heroku, scroll down and make sure automatic deploy is on. After making sure about that, Click on deploy branch on bottom. It should check all of the build steps, if it didn't happenen, it means there is something wrong with your code or your setup, contact us at support and we will help you to fix it. If it successfully checked everything, it means your ready to use the dynos, go to recourses tab and then refresh your page or browser, then you should see the dyons, then follow the instructions in the video while showing up dynos. If you still have any other problems, let us know at the support channel. Our Support team is ready out there!`)

message.channel.send(herokuEmbed)

        }
        else if (emoji === "🏴") {

            msg.delete()
            
            const herokuEmbed = new MessageEmbed()
            .setTitle("What is this discord server for?")
            .setDescription(`This server is for you to get
            help with your code and the official chat server
            for the DashCraft YouTube channel.`)
            .setColor(roleColor)
            
            message.channel.send(herokuEmbed)
            
                    }
                    else if (emoji === "🦺") {

                        msg.delete()
                        
                        const applyEmbed = new MessageEmbed()
                        .setTitle("How can I apply for staff?")
                        .setURL('https://docs.google.com/forms/d/e/1FAIpQLScvdl5YTSfG63eQs-YAz801uGW_nP_SIOrUWn6WTG3d4CniIg/viewform?usp=sf_link')
                        .setDescription(`Click on the hyperlink to apply.
                        Applications Status: Open`)
                        .setColor(roleColor)
                        
                        message.channel.send(applyEmbed)
                        
                                }
    });
     
    }
}
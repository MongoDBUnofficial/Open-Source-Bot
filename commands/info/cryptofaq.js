const { MessageEmbed } = require('discord.js');
const { stripIndents } = require("common-tags")
const { formatDate, promptMessage } = require("../../functions.js")

module.exports = {
    name: "cryptofaq",
    category: "info",
    description: "A FAQ For the bot.",
    run: async ( client,message, args) => {

        const roleColor = message.guild.me.displayHexColor;

        const promptEmbed = new MessageEmbed()
        .setTitle("Crypto FAQ")
        .setThumbnail(client.user.displayAvatarURL())
        .addFields(
            { name: "What is Crypto?", value: "⁉", inline: true },
            { name: "Where can I get support or suggest something?", value: "🦺", inline: true },
            { name: "How can I get the PRO version?", value: "🎟", inline: true },
            { name: "Why is the bot in BETA?", value: "🏗", inline: true },
            { name: "How can I support Crypto?", value: "🎉", inline: true }
        )
        .setColor(roleColor)
        .setDescription(`**Select an emoji from the key
        for more information about it.**`)

 
    const m = await message.channel.send(promptEmbed).then(async msg =>{
        
        const emoji = await promptMessage(msg, message.author, 30, ["⁉", "🦺", "🎟", "🏗","🎉"]);

        
        if (emoji === "⁉") { 
           
            msg.delete()

            const infoEmbed = new MessageEmbed()
            .setTitle("What is Crypto?")
            .setDescription("Crypto is a bot made by Josh0733#0733 with help from others. The bot was made to do many things, a multipurpose bot. In the future, the bot will have loads of features being constantly added.")
            .setColor(roleColor)

            message.channel.send(infoEmbed)
}
 else if (emoji === "🦺") {

msg.delete()

const supportEmbed = new MessageEmbed()
.setTitle("Support & Suggestions")
.setURL('https://discord.gg/kRmVz4g')
.setColor(roleColor)
.setDescription(`You can get support or suggest a command or feature on the support server. Click the title to join!`)

message.channel.send(supportEmbed)

        }
        else if (emoji === "🎟") {

            msg.delete()
            
            const proEmbed = new MessageEmbed()
            .setTitle("How can I get the PRO version?")
            .setDescription(`Unfortunately, the PRO version is only accesible to those who used the bot during BETA. **FORTUNATELY, IT'S IN BETA!** This current version will become the PRO version, enjoy!`)
            .setColor(roleColor)
            
            message.channel.send(proEmbed)
            
                    }
                    else if (emoji === "🏗") {

                        msg.delete()
                        
                        const betaEmbed = new MessageEmbed()
                        .setTitle("Why is the bot in beta?")
                        .setDescription(`The bot is in BETA because it has not been fully developed. Although our goal is to never make this bot 'Fully Developed' (We will be always adding to it.), it's our goal to polish it before we make it so it's not in BETA, take it as if it's a game in early access.`)
                        .setColor(roleColor)
                        
                        message.channel.send(betaEmbed)
                        
                                }
                                else if (emoji === "🎉") {

                                    msg.delete()
                                    
                                    const supportusEmbed = new MessageEmbed()
                                    .setTitle("Support Us")
                                    .setURL('https://top.gg/bot/697963363476570142')
                                    .setDescription(`Crypto will remain a hobby and the developers get motivation by it being in servers. If you want to support us, you can vote for the bot on top.gg by clicking the hyperlink.`)
                                    
                                    message.channel.send(supportusEmbed)
                                    
                                            }
    });
     
    }
}
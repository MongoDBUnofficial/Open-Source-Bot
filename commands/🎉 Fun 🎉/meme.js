        const { MessageEmbed } = require("discord.js");
        const randomPuppy = require("random-puppy");
        
        module.exports = {
            name: "meme",
            category: "🎉 Fun 🎉",
            description: "Activates the meme machine 🖨.",
            usage: "`c!meme`",
            run: async (client, message, args) => {

                const subReddits = ["dankmeme", "meme", "me_irl", "PewdiepieSubmissions", "DankMemesFromSite19"];

                const random = subReddits[Math.floor(Math.random() * subReddits.length)];
        
                const img = await randomPuppy(random);
                const embed = new MessageEmbed()
                    .setColor("RANDOM")
                    .setImage(img)
                    .setTitle(`From /r/${random}`)
                    .setURL(`https://reddit.com/r/${random}`)
                    .setAuthor(message.author.username , message.author.displayAvatarURL({dynamic: true}))
        
                message.channel.send(embed);
            }
        }
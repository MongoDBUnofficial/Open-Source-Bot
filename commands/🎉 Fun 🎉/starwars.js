const { MessageEmbed } = require("discord.js");
const randomPuppy = require("random-puppy");

module.exports = {
    name: "starwars",
    category: "🎉 Fun 🎉",
    description: "Random post from the star wars redit.",
    usage: "`c!starwars`",
    run: async (client, message, args) => {

        const roleColor = message.guild.me.displayHexColor;

        const subReddits = ["StarWars"];

        const random = subReddits[Math.floor(Math.random() * subReddits.length)];

        const img = await randomPuppy(random);
        const embed = new MessageEmbed()
            .setColor(roleColor)
            .setImage(img)
            .setTitle(`From /r/${random}`)
            .setURL(`https://reddit.com/r/${random}`)
            .setAuthor(message.author.username , message.author.displayAvatarURL())
            if(message.author.avatarURL().includes("a_")) {
                embed.setAuthor(message.author.username , message.author.displayAvatarURL({ format: 'gif' }))
            }

        message.channel.send(embed);
    }
}
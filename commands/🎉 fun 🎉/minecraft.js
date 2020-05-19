const { MessageEmbed } = require("discord.js");
const randomPuppy = require("random-puppy");

module.exports = {
    name: "minecraft",
    category: "🎉 fun 🎉",
    description: "Random post from the minecraft redit.",
    usage: "`c!minecraft`",
    run: async (client, message, args) => {

        const roleColor = message.guild.me.displayHexColor;

        const subReddits = ["Minecraft","MinecraftMemes","Minecraftbuilds"];

        const random = subReddits[Math.floor(Math.random() * subReddits.length)];

        const img = await randomPuppy(random);
        const embed = new MessageEmbed()
            .setColor(roleColor)
            .setImage(img)
            .setTitle(`From /r/${random}`)
            .setURL(`https://reddit.com/r/${random}`);

        message.channel.send(embed);
    }
}
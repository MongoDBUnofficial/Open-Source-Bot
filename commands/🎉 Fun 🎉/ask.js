const { MessageEmbed } = require('discord.js');

module.exports = {
    name: "8ball",
    category: "🎉 Fun 🎉",
    description: "Responds with a random yes/no answer to your question.",
    usage: "`c!8ball <question>`",
    run: async ( client,message, args) => {

        message.reply("This command has been renamed to c!8ball. Try it!")

    }
}
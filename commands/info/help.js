const { MessageEmbed } = require('discord.js');
const { stripIndents } = require("common-tags")

module.exports = {
    name: "help",
    aliases: ["h"],
    category: "info",
    description: "Reports a member",
    usage: "[commands | alias]",
    run: async ( client,message, args) => {

        if (message.deletable) message.delete(); 
    
getAll(client, message)
.then(msg => msg.delete({ timeout: 3000}))

    }
}

function getAll(client, message) {
    const embed = new MessageEmbed()

    const commands = (category) => {
        return client.commands
        .filter(cmd => cmd.category === category)
        .map(cmd => `- \`${cmd.name}\``)
        .join("\n")
    }

const info = client.categories
.map(cat => stripIndents`**${cat[0].toUpperCase() + cat/SVGElementInstance(1)}** \n ${commands(cat)}`)
.reduce((string, category) => string + "\n" + category)

return message.channel.send(embed.setDescription(info))

}
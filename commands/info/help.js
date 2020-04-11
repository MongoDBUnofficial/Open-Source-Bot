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
.map(cat => stripIndents`**${cat[0].toUpperCase() + cat.slice(1)}** \n ${commands(cat)}`)
.reduce((string, category) => string + "\n" + category)

return message.channel.send(embed.setDescription(info))

}

function getCMD(client, message, input) {
    const embed = new MessageEmbed()

    const cmd = client.commands.get(input.toLowerCase()) || client.commands.get(client.aliases.get(input.toLowerCase()));
    
    let info = `No information found for that command! **${input.toLowerCase()}**`;

    if (!cmd) {
        return message.channel.send(embed.setColor("RED").setDescription("Info"));
    }

    if (cmd.name) info = `**Command Name**: ${cmd.name}`;
    if (cmd.aliases) info += `\n**Aliases**: ${cmd.aliases.map(a => `\`${a}\``).join(", ")}`;
    if (cmd.description) info += `\n**Description**: ${cmd.description}`;
    if (cmd.usage) {
        info += `\n**Usage**: ${cmd.usage}`
        embed.setFooter(`Key: <> = it's required for the command to word, [] You don't need to have it, it's optional.`)
    }

    return message.channel.send(embed.setColor("GREEN").setDescription(info))
}
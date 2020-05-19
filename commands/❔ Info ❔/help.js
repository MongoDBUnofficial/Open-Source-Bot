const { MessageEmbed } = require('discord.js');
const { stripIndents } = require("common-tags")


module.exports = {
    name: "help",
    category: "❔ Info ❔",
    description: "Gives you info about commands.",
    usage: "`c!help [command]`",
    run: async ( client,message, args) => {

        if (message.deletable) message.delete(); 
    
if(args[0]) {
    return getCMD(client, message, args[0]) 


} else {
    return getAll(client, message)

}

    }
}



function getAll(client, message) {
    
    const sentembed = new MessageEmbed()
    .setTitle("❔ Commands Sent! ❔")
    .setDescription("Sent a DM of the list of commands!")
    .setColor(message.guild.me.displayHexColor)
    message.channel.send(sentembed)

    const embed = new MessageEmbed()
    .setColor(message.guild.me.displayHexColor)

    const commands = (category) => {
        return client.commands
        .filter(cmd => cmd.category === category)
        .map(cmd => `- \`${cmd.name}\``)
        .join("\n")
    }

const info = client.categories
.map(cat => stripIndents`**${cat[0].toUpperCase() + cat.slice(1)}** \n ${commands(cat)}`)
.reduce((string, category) => string + " \n \n " + `${category}`)

return message.author.send(embed.setDescription(`${info}`))

}

function getCMD(client, message, input) {

    const cmd = client.commands.get(input.toLowerCase()) || client.commands.get(client.aliases.get(input.toLowerCase()));

    const sentembed = new MessageEmbed()
    .setTitle(`❔ ${cmd} Info Sent! ❔`)
    .setDescription(`Sent a DM on how to use ${cmd}!`)
    .setColor(message.guild.me.displayHexColor)
    message.channel.send(sentembed)

    const embed = new MessageEmbed()
    .setColor(message.guild.me.displayHexColor)


    
    let info = `No information found for that command! **${input.toLowerCase()}**`;

    if (!cmd) {
        return message.channel.send(embed.setColor("RED").setDescription("Command has not been found!"));
    }

    if (cmd.name) info = `**Command Name**: ${cmd.name}`;
    if (cmd.aliases) info += `\n**Aliases**: ${cmd.aliases.map(a => `\`${a}\``).join(", ")}`;
    if (cmd.description) info += `\n**Description**: ${cmd.description}`;
    if (cmd.usage) {
        info += `\n**Usage**: ${cmd.usage}`
        embed.setFooter(`Information in <> is required for the command to work. [] Is optional.`)
    }

    return message.author.send(embed.setColor("GREEN").setDescription(info))
}
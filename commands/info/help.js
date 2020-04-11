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

function getAll()
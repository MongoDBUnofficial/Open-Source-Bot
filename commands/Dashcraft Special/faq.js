const { MessageEmbed } = require('discord.js');
const { stripIndents } = require("common-tags")
const { formatDate } = require("../../functions.js")

module.exports = {
    name: "faq",
    run: async ( client,message, args) => {
        message.reply("hlptest1")
    }
}
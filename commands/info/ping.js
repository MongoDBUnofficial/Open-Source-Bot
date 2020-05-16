const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "ping",
    category: "info",
    description: "Returns latency and API ms.",
    usage: "`c!ping`",
    run: async ( client,message, args) => {

        const m = await message.channel.send("Ping!");

        m.edit(`Pong! Latency is ${m.createdTimestamp - message.createdTimestamp}ms. WS Latency is ${Math.round(client.ws.ping)}ms`);

        
    }

}
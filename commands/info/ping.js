const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "ping",
    category: "info",
    description: "Returns latency and API ms.",
    run: async ( client,message, args) => {

        if (message.deletable) message.delete();

        const msg = new MessageEmbed()
        .setDescription("Pinging...")

        message.channel.send(embed)

        
        embed.edit()
        .setTitle("🏓 Ping!")
        .setDescription(`Latency is ${Math.floor(msg.createdAt - message.createdAt)}
        API Latency ${Math.round(client.ws.ping)}ms`)

        
    }

}
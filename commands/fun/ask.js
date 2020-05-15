const { MessageEmbed } = require('discord.js');

module.exports = {
    name: "ask",
    category: "fun",
    description: "Gives a reply to your question.",
    usage: "c!ask [question]",
    run: async ( client,message, args) => {

        if (!args[1])
return message.channel.send("Please ask something!").then(msg => msg.delete({ timeout: 3000}))

        let replies = [
            `Obviously.`,
            `Maybe.`,
            `Not at all.`,
            `No.`,
            `Yep.`,
            `Possibly.`,
            `Potientally.`,
            `Definetly.`,
            `Of course not.`,
            `It's unlikely.`,
            `Hardly.`,
            `Yup.`,
            `Totally.`,
            `Undoubtedly.`
           ];
           
           
               let reply = statuses[Math.floor(Math.random() * replies.length)];

               const embed = new MessageEmbed()
               .setTitle(args.slice().join(" "))
               .setDescription(reply)

               message.channel.send(embed)


    }
}
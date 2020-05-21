const { MessageEmbed } = require('discord.js');

module.exports = {
    name: "ask",
    category: "🎉 Fun 🎉",
    description: "Gives a reply to your question.",
    usage: "`c!ask <question>`",
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
           
           
               let reply = replies[Math.floor(Math.random() * replies.length)];

               const embed = new MessageEmbed()
               .setTitle(args.slice().join(" "))
               .setDescription(reply)
               .setColor("RANDOM")
               .setAuthor(message.author.username , message.author.displayAvatarURL())
               if(message.author.avatarURL().includes("a_")) {
                   embed.setAuthor(message.author.username , message.author.displayAvatarURL({ format: 'gif' }))
               }

               message.channel.send(embed)


    }
}
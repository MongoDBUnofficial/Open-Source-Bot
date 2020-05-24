module.exports = {
    name: "pfp",
    category: "❔ Info ❔",
    description: "Responds with a link to your profile picture. (PNG FORMAT)",
    usage: "`c!pfp`",
    run: async ( client,message, args) => {

        const pfpmember = message.mentions.users.first() || message.author;

            message.channel.send(pfpmember.displayAvatarURL({dynamic: true})) 

    }
}
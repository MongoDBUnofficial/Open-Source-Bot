module.exports = {
    name: "pfp",
    category: "❔ Info ❔",
    description: "Responds with a link to your profile picture. (PNG FORMAT)",
    usage: "`c!pfp`",
    run: async ( client,message, args) => {

        const pfpmember = message.mentions.users.first() || message.author;

        if(pfpmember.avatarURL().includes("a_")) {
            message.channel.send(pfpmember.displayAvatarURL({ format: 'gif', dynamic: true, size: 1024 }))
 return;
        }

message.channel.send(pfpmember.username + "'s Profile Picture. \n" + pfpmember.displayAvatarURL())

    }
}
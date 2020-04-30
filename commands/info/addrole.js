

module.exports = {
    name: "addroletest",
    category: "info",
    description: "Where you can put large ammounts of text without spamming in the server.",
    run: async ( client,message, args) => {

        message.guildMember.role.add('698333678220083291');
    }
}
const { GuildMemberRoleManager } = require("discord.js");


module.exports = {
    name: "addroletest",
    category: "info",
    description: "Where you can put large ammounts of text without spamming in the server.",
    run: async ( client,message, args) => {

        var roles = new GuildMemberRoleManager(roles)
        message.guildMember.roles.add('698333678220083291');
    }
}
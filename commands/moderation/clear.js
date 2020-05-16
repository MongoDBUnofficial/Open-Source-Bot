module.exports = {
    name: "clear",
    aliases: ["purge"],
    category: "moderation",
    description: "Purges the ammount of messages you enter.",
    run: async (client, message, args) => {

        //infinity glitch
if(message.content.toLowerCase().startsWith("c!clear infinity")) {
    message.reply("❌ Thats not a number!").then(msg => msg.delete({ timeout: 3000})) 
    return;
}

        if (message.deletable) {
            message.delete();
        }
    
        // no permissions
        if (!message.member.hasPermission("MANAGE_MESSAGES")) {
            return message.reply("❌ You don't have permissions to do that!").then(msg => msg.delete({ timeout: 3000})) 
        }

        // if its not a number
        if (isNaN(args[0]) || parseInt(args[0]) <= 0) {
            return message.reply("❌ Thats not a number!").then(msg => msg.delete({ timeout: 3000})) 
        }

        // cant delete
        if (!message.guild.me.hasPermission("MANAGE_MESSAGES")) {
            return message.reply("❌ The bot does not have the manage messages permission!").then(msg => msg.delete({ timeout: 3000})) 
        }

        let deleteAmount;

        if (parseInt(args[0]) > 100) {
            deleteAmount = 100;
        } else {
            deleteAmount = parseInt(args[0]);
        }

        message.channel.bulkDelete(deleteAmount, true)
            .then(deleted => message.channel.send(`Deleted ${deleted.size} messages.`)).then(msg => msg.delete({ timeout: 3000})) 
    }
}
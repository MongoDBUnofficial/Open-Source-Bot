module.exports = {
    name: "clear",
    aliases: ["purge"],
    category: "moderation",
    description: "Purges the ammount of messages you enter.",
    run: async (client, message, args) => {
        if (message.deletable) {
            message.delete();
        }
    
        // no permissions
        if (!message.member.hasPermission("MANAGE_MESSAGES")) {
            return message.reply("❌ You don't have permissions to do that!").then(m => m.delete(5000));
        }

        // if its not a number
        if (isNaN(args[0]) || parseInt(args[0]) <= 0) {
            return message.reply("❌ Thats not a number!").then(m => m.delete(5000));
        }

        // cant delete
        if (!message.guild.me.hasPermission("MANAGE_MESSAGES")) {
            return message.reply("❌ The bot does not have the manage messages permission!").then(m => m.delete(5000));
        }

        let deleteAmount;

        if (parseInt(args[0]) > 100) {
            deleteAmount = 100;
        } else {
            deleteAmount = parseInt(args[0]);
        }

        message.channel.bulkDelete(deleteAmount, true)
            .then(deleted => message.channel.send(`Deleted ${deleted.size} messages.`))
            .catch(err => message.reply(`There was an error deleting those messages. ${err}`));
    }
}
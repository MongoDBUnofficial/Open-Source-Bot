const { MessageEmbed } = require("discord.js");
const { stripIndents } = require("common-tags");
const { promptMessage } = require("../../functions.js");

module.exports = {
    name: "ban",
    category: "🔐 Moderation 🔐",
    description: "bans the member",
    usage: "`c!ban <mention>`",
    run: async (client, message, args) => {
        const logChannel = message.guild.channels.cache.find(c => c.name === "bot-logs") || message.channel;

        if (message.deletable) message.delete();

        // No args
        if (!args[0]) {
            return message.reply("Please provide a person to ban.")
            .then(msg => msg.delete({ timeout: 3000}))
        }

        // No reason
        if (!args[1]) {
            return message.reply("Please provide a reason to ban.")
            .then(msg => msg.delete({ timeout: 3000}))
        }

        // No author permissions
        if (!message.member.hasPermission("BAN_MEMBERS")) {
            return message.reply("❌ You do not have permissions to ban members. Please contact a staff member")
            .then(msg => msg.delete({ timeout: 3000}))
        
        }
        // No bot permissions
        if (!message.guild.me.hasPermission("BAN_MEMBERS")) {
            return message.reply("❌ I do not have permissions to ban members.")
            .then(msg => msg.delete({ timeout: 3000}))
        }

        const toBan = message.mentions.members.first() || message.guild.members.cache.get(args[0]);

        // No member found
        if (!toBan) {
            return message.reply("I couldn't find that member. Try again.")
            .then(msg => msg.delete({ timeout: 3000}))
        }

        // Can't ban urself
        if (toBan.id === message.author.id) {
            return message.reply("You can't ban yourself...")
            .then(msg => msg.delete({ timeout: 3000}))
        }

        // Check if the user's banable
        if (!toBan.bannable) {
            return message.reply("Cannot ban a unbannable person.")
            .then(msg => msg.delete({ timeout: 3000}))
        }

        
//cant kick a member with kick permissions
if (toBan.hasPermission("KICK_MEMBERS")) {
    return message.reply("❌ You cannot ban a member that has kick permissions!")
     .then(msg => msg.delete({ timeout: 3000}))
 }
        
        const embed = new MessageEmbed()
            .setColor("#ff0000")
            .setThumbnail(toBan.user.displayAvatarURL({dynamic: true}))
            .setFooter(toBan.user.tag, toBan.user.displayAvatarURL({dynamic: true}))
            .setTimestamp()
            .setDescription(stripIndents`**> Banned member:** ${toBan.user.username} (${toBan.user.id})
            **> Banned by:** ${message.member} (${message.member.id})
            **> Reason:** ${args.slice(1).join(" ")}`)
            .setAuthor(message.author.username , message.author.displayAvatarURL({dynamic: true}))


        const promptEmbed = new MessageEmbed()
            .setColor("GREEN")
            .setAuthor(`This verification becomes invalid after 30s.`)
            .setDescription(`Do you want to ban ${toBan}?`)
            .setAuthor(toBan.user.username , toBan.user.displayAvatarURL({dynamic: true}))

        // Send the message
        await message.channel.send(promptEmbed).then(async msg => {
            // Await the reactions and the reactioncollector
            const emoji = await promptMessage(msg, message.author, 30, ["✅", "❌"]);

            // Verification stuffs
            if (emoji === "✅") { 
                msg.delete();

                toBan.ban(args.slice(1).join(" "))
                    .catch(err => {
                        if (err) return message.channel.send(`That didn't work! Send this to the developer: ${err}`)
                    });

                logChannel.send(embed);
            } else if (emoji === "❌") {
                msg.delete();

                message.reply(`Ban has been cancelled.`)
                .then(msg => msg.delete({ timeout: 3000}))
            }
        });
    }
};
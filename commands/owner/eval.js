const { util } = require("util");

module.exports = {
    name: "eval",
    category: "owner",
    description: "[Owner Only]",
    run: async ( client,message, args) => {




module.exports.run = (client, message, args) => {

if (!message.author.id === "324593687369744385") {
    message.reply("You are not the bot owner!")
    return;
}

	if (!args[0]) return message.reply("you must provide JavaScript code!");
    
    try {
        let output = eval(args.join(" "));
        if (typeof output !== "string") output = util.inspect(output);
        return message.channel.send(`**Output:**\n\`\`\`js\n${output}\n\`\`\``);
    } catch(err) {
        return message.channel.send(`**Error:**\n\`${err}\``);
    }
}

    }
}
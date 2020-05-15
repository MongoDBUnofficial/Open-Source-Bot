// ＮＯＴ ＴＯ ＢＥ ＤＩＳＴＲＩＢＵＴＥＤ \\

const Discord = require("discord.js");
const MessageEmbed = Discord.MessageEmbed;
const client = new Discord.Client({
 disableEveryone: true
});
const fs = require("fs");

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();

client.categories = fs.readdirSync("./commands/")

//Config
require("dotenv").config({
    path: __dirname + "/.env"
});

["command"].forEach(handler => {

require(`./handler/${handler}`)(client);

});



//Ready
client.on("ready", () => {

    console.log(`${client.user.username} is ready!`) + client.user.setStatus("online"); 
  
    let statuses = [
     `Game News`,
     `BETA Construction`,
     `c!help`,
     `c!ping`,
     `Reports`,
     `${client.users.cache.size} users`,
     `${client.guilds.cache.size} servers`
    ];
    
    setInterval(function() {
        let status = statuses[Math.floor(Math.random() * statuses.length)];
        client.user.setActivity(status, {type: "LISTENING"})
    }, 2500);

});

client.on("message", async message => {
    
    
    const prefix = "c!";

    if(message.channel.type === "dm") return;
    if (message.author.bot) return;
    if (!message.guild) return;
    if (!message.content.startsWith(prefix)) return;
    if (!message.member) message.member = await message.guild.fetchMember(message);


    const args = message.content.slice(prefix.length).trim().split(/ +/g)
    const cmd = args.shift().toLowerCase();

    if (cmd.length === 0) return;

    let command = client.commands.get(cmd);
    if (!command) command = client.commands.get(client.aliases.get(cmd));

    if (command) command.run(client, message, args);



});

//reply prefix to mention
client.on('message', message => {
     if(message.author.bot) return;
    if(message.channel.type === "dm") return;
    if(message.author.bot) return;
    if(message.channel.type === "dm") return;
    if(!client.user.hasPermission("SEND_MESSAGES")) {
        console.log("some doofus didnt allow the bot to talk lol")
    }
    
    const roleColor = message.guild.me.displayHexColor;

    if(message.mentions.users.first() && message.mentions.users.first().tag === "Crypto [BETA]#4963") {

        const embed = new MessageEmbed()
        .setDescription(`My prefix is c!
        For help on a command please do c!help [command name].
        Do c!help for commands list.`)
        .setColor(roleColor)

        message.channel.send(embed)

    
    }

});




client.login(process.env.TOKEN)
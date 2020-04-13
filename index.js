
const Discord = require("discord.js");
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
     `Meme Generators`,
     `c!commands`
    ];
    
    setInterval(function() {
        let status = statuses[Math.floor(Math.random() * statuses.length)];
        client.user.setActivity(status, {type: "LISTENING"})
    }, 2500);

});

client.on("message", async message => {
    
    if(message.content.startsWith(`${client.user.tag}`)) {

    message.reply("My prefix is c! /n For help on a command please do c!help [command name]. /n Do c!help for commands list.")
    
    const prefix = "c!";

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



}

});

//reply prefix to mention

client.login(process.env.TOKEN);
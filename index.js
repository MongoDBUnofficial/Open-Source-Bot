
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
     `c!help`,
     `${client.users.cache.size} users`,
     `${client.guilds.cache.size} servers`
    ];
    
    setInterval(function() {
        let status = statuses[Math.floor(Math.random() * statuses.length)];
        client.user.setActivity(status, {type: "LISTENING"})
    }, 20000);

});

client.on("message", async message => {
    
    
    const prefix = "c!";

    if(message.channel.type === "dm") return;

    const clientPerms = message.channel.permissionsFor(message.client.user)

    if(!clientPerms.has("SEND_MESSAGES")) return;

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

    const clientPerms = message.channel.permissionsFor(message.client.user)

    if(!clientPerms.has("SEND_MESSAGES")) return;

    if(message.author.bot) return;
    
    const roleColor = message.guild.me.displayHexColor;

    if(message.mentions.users.first() && message.mentions.users.first().tag === "Crypto [BETA]#4963") {

        const embed = new MessageEmbed()
        .setTitle("❔ Guidance ❔")
        .setURL('https://top.gg/bot/697963363476570142')
        .setDescription(`**Prefix:** c!
        **Help Command:** c!help
        
        Thanks for using ${client.user.username}.`)
        .setColor(roleColor)

        message.channel.send(embed) 

    
    }

});




client.login(process.env.TOKEN)
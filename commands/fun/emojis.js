const { MessageEmbed } = require('discord.js');
const { stripIndents } = require("common-tags")
const { formatDate } = require("../../functions.js")

module.exports = {
    name: "emojis",
    category: "fun",
    description: "Shows the custom emoji's in the current server.",
    run: async ( client,message, args) => {

        let Emojis="";
        let EmojisAnimated="";
        let EmojiCount = 0;
        let Animated = 0;
        let OverallEmojis = 0;
        function Emoji(id){
            return client.emojis.cache.get(id).toString()
        } 
        message.guild.emojis.cache.forEach(emoji=>{
            OverallEmojis++;
            if(emoji.animated){
                Animated++;
                EmojisAnimated+=Emoji(emoji.id)
            }else{
                EmojiCount++;
                Emojis+=Emoji(emoji.id)
            }
        })
        let Embed = new MessageEmbed()
        .setTitle(`All emojis in ${message.guild.name}.`)
        .setDescription(`**Animated: ${Animated}**:\n${EmojisAnimated}\n\n**Normal: ${EmojiCount}**:\n${Emojis}\n\n**Total: ${OverallEmojis}**`)
        .setThumbnail(message.guild.iconURL)
        .setColor(`RANDOM`)
        message.channel.send(Embed)


    }
}

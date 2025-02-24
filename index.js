// {} () []

const Discord = require ("discord.js")
const client = new Discord.Client (
    {intents:["GUILDS", "GUILD_MEMBERS", "GUILD_MESSAGES"]}
)

client.login ("Bot-Token")

client.on ("ready", () => {
    console.log ("💚︲Il bot è online")
})

client.on  ("messageCreate", (message) => {
    console.log (message)
})

client.on  ("messageCreate", (message) => {
    if (message.content == ".skyforce"){
            message.channel.send("this is the link of skyforce: https://discord.gg/7CTtwFzn7C ")
    }

    if (message.content == ".ciao"){
        message.channel.send ("ciao")
    }

    if (message.content == ".links"){
        var embed = new Discord.MessageEmbed ()
            .setTitle ("My links:")
            .setDescription (`${message.author.tag} here are my links: https://discord.gg/7CTtwFzn7C , https://discord.gg/kjWnTtPRYM`)
            .setThumbnail ("https://static.wikia.nocookie.net/minecraft_gamepedia/images/b/b7/Crafting_Table_JE4_BE3.png/revision/latest/thumbnail/width/360/height/360?cb=20191229083528")
        message.channel.send ({embeds: [embed]})
    }

})

client.on ("message" , (message) =>{
    if (message.content == ".DM's")
        message.author.send ("**__yo__** eccomi")
})

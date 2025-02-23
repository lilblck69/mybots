const Discord = require ("discord.js")
const client = new Discord.Client (
    {intents:["GUILDS", "GUILD_MEMBERS", "GUILD_MESSAGES"]}
)

client.login ("MTM0MzI1ODQ2Njc5MzI5NTk2NA.Gk6ojs.O_kcrq01sNKQKK6ZFdM6yUUR1vkqoGshXgHDdE")

client.on ("ready", () => {
    console.log ("💚︲Il bot è online")
})

client.on  ("messageCreate", (message)=>{
    console.log ("🩵︲Qualcuno ha appena inviato un messaggio nel server")
})

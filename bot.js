const Discord = require('discord.js');

const client = new Discord.Client();

 

client.on('ready', () => {

    console.log('I am ready!');

});

 

client.on('message', message => {

    if (message.content === '$beanos') {

       message.reply('https://cdn.discordapp.com/attachments/595627324255240192/618259005806215196/Z.png');

       }
{

    if (message.content === '$help') {

       message.reply('https://i.imgflip.com/38cs6n.jpg');

       }
});

 

// THIS  MUST  BE  THIS  WAY

client.login(process.env.BOT_TOKEN);//BOT_TOKEN is the Client Secret

const Discord = require('discord.js');
const client = new Discord.Client();
const auth = require('./auth.json');

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.login(process.env.token);
client.on('message', msg => {
  if (msg.content === '$beanos') {
    msg.reply('https://cdn.discordapp.com/attachments/595627324255240192/618259005806215196/Z.png');
  }
});

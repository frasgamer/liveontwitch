const Discord = require('discord.js');
const client = new Discord.Client();
var prefix ="-";

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('ready', () => {
  client.user.setGame(`مرهبا امزح امزح`,'https://www.twitch.tv/By:A7MD');
});

client.login(process.env.BOT_TOKEN);

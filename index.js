const discord = require('discord.js');
var config = require('./config.json')


const bot = new discord.Client;

// Connexion
bot.login(config.discordToken);


//For every message on the discord
bot.on('message', function(message) {


})

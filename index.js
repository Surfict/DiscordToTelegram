const Discord = require('discord.js');
const TelegramBot = require('node-telegram-bot-api');
var config = require('./config.json')


const discordBot = new Discord.Client;
const telegramBot = new TelegramBot(config.telegramToken);

// Connexion
discordBot.login(config.discordToken);


//For every message on the discord
discordBot.on('message', function(message) {
    telegramBot.sendMessage(config.telegramChatID, message.content);
})

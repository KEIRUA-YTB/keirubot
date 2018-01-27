const Discord = require("discord.js");

var bot = new Discord.Client();

bot.on("ready",function(){
	bot.user.setPresence({game: { name: '[&help NON DISPONIBLE!] - https://discord.gg/XVEzyyq ', type: 0}})
	console.log("Le bot a bien était connecte");



});



bot.login("NDA2MTk0NjAzNDIzOTU3MDM0.DU01lg.wq6IMG1JRJGjFT3rNBkZEfvUlQI");

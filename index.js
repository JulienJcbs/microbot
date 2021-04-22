const Discord = require('discord.js'),
    client = new Discord.Client({
        fetchAllMembers: true
    }),
    config = require('./config.json'),
    fs = require('fs');

client.login(config.token);

client.on('message', message => {
    if (message.content.charAt(0) == "$") {
        displayGame(message);
    }
})

function displayGame(game) {
    switch (game.content) {
        case "$rl":
            displayMessage("@everyone Une soirée Rocket league est organisée ce soire les amis Strouchmhs", { files: ["./img/RL.png"] });
            break;
        case "$kc":
            displayMessage("@everyone Une soirée KCulture est organisée ce soire les amis Strouchmhs", { files: ["./img/KC.jpg"] });
            break;
        case "$gp":
            displayMessage("@everyone Une soirée Gartic Phone est organisée ce soire les amis Strouchmhs", { files: ["./img/GP.jpg"] });
            break;
        case "$sq":
            displayMessage("@everyone Une soirée SQuizz est organisée ce soire les amis Strouchmhs", { files: ["./img/SQ.jpg"] });
            break;
        case "$sn":
            displayMessage("@everyone Une soirée Smite est organisée ce soire les amis Strouchmhs", { files: ["./img/SN.jpg"] });
            break;
        case "$au":
            displayMessage("@everyone Une soirée Among US est organisée ce soire les amis Strouchmhs", { files: ["./img/AU.jpg"] });
            break;
    }
}

function displayMessage(message, img) {
    client.channels.cache.get(`707690948229857394`).send(message)
    client.channels.cache.get("707690948229857394").send(img);
}
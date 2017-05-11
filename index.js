require('dotenv').config();

const addEventCommand = require('./commands/signup/add');

const graf = require('discord-graf');
const bot = new graf.Bot({
    name: 'ESOTrialsBot',
    version: '1.0.0',
    about: 'A simple WIP Discord bot for ESO guilds to do signups for groups (e.g. trials)',
    token: process.env.TOKEN,
    commandPrefix: '!!',
    clientOptions: {
        disableEveryone: true
    }
});
const client = bot
    .registerDefaults()
    .registerModules([
        ['events', 'Events & Signups']
    ])
    .registerCommands([
        addEventCommand
    ])
    .createClient();

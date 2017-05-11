const graf = require('discord-graf');

module.exports = class AddEventCommand extends graf.Command {
    constructor(bot) {
        super(bot, {
            name: 'add-event',
            aliases: ['event-add', 'addevent'],
            module: 'events',
            memberName: 'add',
            description: 'Adds an event to the Guild event list',
            usage: 'add-event <name> <date> <time> [max-signups]',
            details: 'Adds an event to the Guild event list. You specify a <name> which should be descriptive such as "core team vAA" and \
            optionally specifiy the max signups allowed. Make sure you put single quotes (\'\') around your event name if it contains spaces! Also \
            use of military time is preferred and it will be displayed in your Guild default timezone.',
            examples: ['add-event "core team vAA" 2017-03-15 20:00', 'add-event SO 2017-05-15 10:00 12'],
            argsType: 'multiple',
            argsSingleQuotes: true,
            guildOnly: true
        });
    }

    run(message, args) {
       if(!args[0]) throw new graf.CommandFormatError(this, message.guild);
       return Promise.resolve('The command was: ' + message.content); 
    }
}
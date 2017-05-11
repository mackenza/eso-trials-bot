const nedb = require('nedb');
const db = new nedb({filename: 'data/botDB.json', autoload: true});

db.insert({type: 'init', status: 'OK'}, (err, newDoc) => {
    if (err) {
        console.error(err);
    } else {
        db.findOne({type: 'init'}, (err, doc) => {
            if (err) {
                console.error(err)
            } else {
                console.log('Database init: ' + doc.status);
            }
        })
    }
})


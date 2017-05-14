const nedb = require("nedb");
const db = new nedb({ filename: "data/botDB.json", autoload: true });

var botDB = {
  init: function() {
    db.findOne({ type: "init" }, (err, doc) => {
      if (err) {
        throw error;
      } else if (doc) {
        console.log("Database init: " + doc.status);
      } else {
        db.insert({ type: "init", status: "OK" }, (err, newDoc) => {
          if (err) {
            throw err;
          } else {
            console.log("Database init: " + newDoc.status);
          }
        });
      }
    });
  }
};

//botDB.init();
exports.botDB = botDB;

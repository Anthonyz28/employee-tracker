const db = require("./db/database.js");
const startPrompt = require("./lib/menu");
// Create the connection to database //

db.connect(err => {
    if (err) {
        console.log(`Error: ${err.message}`);
        return;
    }

    startPrompt()
        .catch(err => console.log(err));
});

  



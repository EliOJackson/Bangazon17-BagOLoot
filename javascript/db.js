const sqlite3 = require('sqlite3').verbose();
const { createTables } = require("./makeTable.js");


(function createDb() {
    new sqlite3.Database('lootBag.sqlite', () => {
        console.log("test");
        createTables()
            .then((data) => {
                console.log("customerids", data);
            })
            .catch((err) => {
                console.log("oops", err);
            })
    });
}()); 
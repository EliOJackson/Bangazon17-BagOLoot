'use strict';
const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database('lootBag.sqlite', () => {
    console.log("Connection to db successful");
}); 
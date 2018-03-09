
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('lootBag.sqlite');
const { kids } = require('../data/data.js');

module.exports.createTables = () => {
    return new Promise((resolve, reject) => {
        db.run('DROP TABLE IF EXISTS kids')
            .run(
            'CREATE TABLE IF NOT EXISTS kids (id INTEGER PRIMARY KEY AUTOINCREMENT, first_name TEXT, toy TEXT, delivered TEXT)', (err) => {
                if (err) return reject(err);
                resolve(insertRows())
            });
    });
};

const insertRows = () => {
    return Promise.all(kids.map(({ firstName, toy, delivered }) => {
        return new Promise((resolve, reject) => {
            db.run(`INSERT INTO kids VALUES (null, "${firstName}", "${toy}", "${delivered}")`, function (err) {
                if (err) return reject(err);
                resolve(this.lastID)
            });
        });

    }))
}
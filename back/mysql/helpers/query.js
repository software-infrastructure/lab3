const config = require('./config');
const mysql = require('mysql');

async function query(sql) {
    const connection = await mysql.createConnection(config);
    connection.connect();
    return new Promise(function (resolve, reject) {
        connection.query(sql, function (err, rows) {
            if (rows === undefined) {
                reject(new Error(err));
            } else {
                resolve(rows);
            }
        });
    });
}

module.exports = query;

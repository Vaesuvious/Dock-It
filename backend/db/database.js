const mysql = require('mysql2');

const db = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: 'C0nn3c+!on',
    database: 'todos'
});

//open the mysql connection
db.connect(err =>{
    if (err) throw err;
    console.log('DB connected!');
});

module.exports = db;
const mysql = require('mysql');

// create mysql connection
const dbConn = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : '',
    database: 'nodejs'
});

dbConn.connect(function(err){
    if(err) throw err;
    console.log('Database connected success');
})

module.exports = dbConn;
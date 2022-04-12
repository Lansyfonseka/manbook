const mysql = require('mysql2')
const db = mysql.createConnection({
host: "bgs2onkyc3eja1qtxjbe-mysql.services.clever-cloud.com",
user: "usoza3v9fqxjj54c",
password: "nrWfGYmJOGa4iNgmJUKZ",
database:"bgs2onkyc3eja1qtxjbe" 
})

module.exports = db;
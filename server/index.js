const express = require('express');
const cors = require('cors')
const databaseConfig = require('./server.config')
const mysql = require('mysql2')

const database = mysql.createConnection(databaseConfig);
const app = express();
const PORT = process.env.PORT || 8080;
app.use(cors());
app.use(express.json());

database.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

// database.query(
//   'SELECT * FROM users WHERE user_id IN (10,12)',
//   function(err, results) {
//     console.log(results); // results contains rows returned by server
//   }
// );

app.get("/api/get", (req,res)=>{
  database.query("SELECT * FROM users", (err,result)=>{
    if(err) console.log(err);
  res.send(result)
  });   
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
const express = require('express');
const db = require('./server.config')
const cors = require('cors')

db.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

db.query("INSERT INTO users (user_name, user_mail, user_password) values ('Egor','egor@mail.ru','1234')");

db.query(
  'SELECT * FROM `users`',
  function(err, results, fields) {
    console.log(results); // results contains rows returned by server
  }
);

db.end()
// const app = express();
// const PORT = 3002;
// app.use(cors());
// app.use(express.json())

// // Route to get all posts
// app.get("/api/get", (req,res)=>{
// db.query("SELECT * FROM posts", (err,result)=>{
//     if(err) {
//     console.log(err)
//     } 
// res.send(result)
// });   });

// // Route to get one post
// app.get("/api/getFromId/:id", (req,res)=>{

// const id = req.params.id;
//  db.query("SELECT * FROM posts WHERE id = ?", id, 
//  (err,result)=>{
//     if(err) {
//     console.log(err)
//     } 
//     res.send(result)
//     });   });

// // Route for creating the post
// app.post('/api/create', (req,res)=> {

// const username = req.body.userName;
// const title = req.body.title;
// const text = req.body.text;

// db.query("INSERT INTO posts (title, post_text, user_name) VALUES (?,?,?)",[title,text,username], (err,result)=>{
//    if(err) {
//    console.log(err)
//    } 
//    console.log(result)
// });   })

// // Route to like a post
// app.post('/api/like/:id',(req,res)=>{

// const id = req.params.id;
// db.query("UPDATE posts SET likes = likes + 1 WHERE id = ?",id, (err,result)=>{
//     if(err) {
//    console.log(err)   } 
//    console.log(result)
//     });    
// });

// // Route to delete a post

// app.delete('/api/delete/:id',(req,res)=>{
// const id = req.params.id;

// db.query("DELETE FROM posts WHERE id= ?", id, (err,result)=>{
// if(err) {
// console.log(err)
//         } }) })

// app.listen(PORT, ()=>{
//     console.log(`Server is running on ${PORT}`)
// })
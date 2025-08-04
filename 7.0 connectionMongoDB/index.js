const express = require('express');
const app = express();
const connectDB = require('./db'); 
const users = require('./routes/users');


const port = 3000;

app.use(express.json()); // body-parser

connectDB();//connect to DB

app.use('/api',users);

/// -> /api/users

app.get('/',(req,res) => {
    console.log("Inside home page handeler.");
    res.send("Hello from backend.");
})

app.listen(port, ()=>{
    console.log("Server is Up");
})
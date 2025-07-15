//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming


import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";

import { log } from "console";

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;
var enteredPassword="";

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  //console.log(__dirname+ "/public/index.html");
  res.sendFile(__dirname + "/public/index.html");
});

function password(req,res,next) {
    enteredPassword = req.body["password"];
    next();
}

app.use(password);

app.post("/check", (req,res) => {
    if(enteredPassword == "Muthaal")
        res.sendFile(__dirname + "/public/secret.html"); 
    else 
    res.sendFile(__dirname + "/public/index.html");
})

app.listen(port,()=>{
    console.log("hi")
}); 

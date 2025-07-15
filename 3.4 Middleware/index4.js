import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";
import { log } from "console";

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;
var bandname ="";

app.use(bodyParser.urlencoded({extended: true}));

app.get("/bandGenerator", (req, res,next) => {
  //console.log(__dirname+ "/public/index.html");
  res.sendFile(__dirname + "/public/index.html");
});

function bandNameGenerator(req,res,next)
{
    bandname = req.body["street"] + req.body["pet"];
    next();
}

app.use(bandNameGenerator);


app.post("/submit",(req,res,next) => {
    res.send(`<h3>Band Name: </h3> <h4>${bandname}</h4>`);
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

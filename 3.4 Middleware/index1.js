import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";
import { log } from "console";

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", (req, res) => {
  console.log(__dirname+ "/public/index.html");
  res.sendFile(__dirname + "/public/index.html");
});


app.post("/submit", (req,res) => {
  console.log(req.body);
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

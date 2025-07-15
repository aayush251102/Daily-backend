import express from "express";

const app = express();
const port = 3000;

function logger(req,res,next){
  console.log("Method Name: ",req.method);
  console.log("Url: ", req.url);
  next();
}

app.use(logger);

app.get("/about", (req, res) => {
  res.send("Hello, I am a Bot!");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

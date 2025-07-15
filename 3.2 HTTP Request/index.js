import express from "express"

const app = express();
const port = 3001;

app.get("/" , (req,res) => {
    res.send("<h1>Aayush Kashyap</h1>");
})
app.get("/about" , (req,res) => {
    res.send("<h1>I am a Engineer</h1>  <h3>Phone No:</h3> 7372XXXX");
} )

app.listen(port, () =>{
    console.log(`listening at port ${port}`);  
})
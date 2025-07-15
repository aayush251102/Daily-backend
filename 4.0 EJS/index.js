import express from "express";

const today = new Date();
const dayNo = today.getDay();

const app = express();

let message="";

if(dayNo ==6 || dayNo ==0)
{
    message  = " a Weekend, It's time to have fun!";
}else{
    message = "a Weekday, It's time to work hard!";
}

app.get("/", (req,res) => {
    res.render("index.ejs", {text : message});
})

app.listen(3000, (err) => {
    if(err)
        console.error(err);
    else{
        console.log("Server is running at port 3000!");
        
    }
})

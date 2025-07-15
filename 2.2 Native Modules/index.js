const fs = require("fs");

fs.writeFile("message.txt","I am from vit vellore",(err) =>{
    if(err) throw err;
    console.log("The file has been saved!");
});

fs.readFile("message.txt", 'utf8',(err,data) => {
    if(err)
    {
        throw err;
        return;
    }
    console.log("reading data");
    
    console.log(data);
})
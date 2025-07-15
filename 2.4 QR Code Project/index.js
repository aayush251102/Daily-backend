import inquirer from "inquirer";
import qr  from "qr-image"
import fs from "fs";



 // 1. Use the inquirer npm package to get user input.
 inquirer
 .prompt([{
    message: "Type Your URL: ",
    name: "URL"
 }])
 .then((answers) => {
    // 2. Use the qr-image npm package to turn the user entered URL into a QR code image.
   const url = answers.URL;
   var qr_png = qr.image(url, {type: 'png'});
   qr_png.pipe(fs.createWriteStream('qr_image.png'));

   // 3. Create a txt file to save the user input using the native fs node module.
   fs.writeFile('url.txt', url, (err) => {
        if (err) {
        console.error(err);
        } else {
          console.log("Url file saved successfully! ");
        }
    });
   

 })
.catch((error) => {
   if (error.isTtyError) {
     // Prompt couldn't be rendered in the current environment
   } else {
     // Something else went wrong
   }
});







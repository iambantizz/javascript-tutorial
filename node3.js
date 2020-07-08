// synchronous and blocking
// - line by line execution

// Asynchronous and non-blocking
// - line by line execution not guaranteed
// - callbacks will fire 

const fs = require("fs");
 fs.readFile("index.txt", "utf-8", (err, data)=>{
    console.log( data);
} );
console.log("This is message");

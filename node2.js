const fs = require("fs");
let text = fs.readFileSync("index.txt", "utf-8");
text = text.replace("browser", "banti");

console.log("the content of the file is");
console.log(text);

console.log("creating a new file...")
fs.writeFileSync("banti.txt", text);

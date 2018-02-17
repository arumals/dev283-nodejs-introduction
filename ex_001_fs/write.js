const fs = require("fs");
const path = require("path");

fs.writeFile(path.join(__dirname,"/new-data.txt"),"lorem ipsum dolor",{ encoding: 'utf-8' }, (err) => {
  if(err) return console.log(err);
  console.log("file written");
})
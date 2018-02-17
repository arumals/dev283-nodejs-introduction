const fs = require("fs")
const path = require("path")

fs.readFile("data.txt", { encoding: 'utf-8' }, (err, data) => {
  console.log(data);
})
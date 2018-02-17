const http = require("http");
const fs = require("fs");
const path = require("path");

// reference to the file
const file = path.join(__dirname,"customer-data.csv");

// read all the file
fs.readFile(file, (err, data) => {

    // on error end process
    if(err){
        console.log(err.message);
        process.exit(1);
    }

    // extract lines from file
    const lines = data.toString("utf-8").trim().split("\n");

    // extract indexes from the first line
    const indexes = lines.shift().trim().split(",");

    // extract the values and convert their values to keys
    const values = lines.map((line) => {
        return line.trim().split(",").reduce((accumulator,value, index, array) => {
            accumulator[indexes[index]] = value;
            return accumulator;
        },{});
    });

    // stringifie text
    const stringifiedValues = JSON.stringify(values,null,2);

    // write the file
    fs.writeFile("customer-data.json", stringifiedValues, "utf-8",  err => {
        console.log("File has been written");
    });

});


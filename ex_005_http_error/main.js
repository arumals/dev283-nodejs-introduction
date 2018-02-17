const http = require("http");
const url = "http://www.comoaprendi.com";

http.get(url, response => {
    let html = "";
    let counter = 0;
    response.on("data",data => {
        html += data;
        counter++;
    });
    response.on("end", () => {
        console.log(html, counter);
    });
    response.on("error", err => {
        console.log(`Error found ${err.message}`);
    });
}).on("error", err => {
    if(err){
        console.log(`Error found ${err.message}`);
    }
})

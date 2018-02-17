const http = require("http");
const postData = JSON.stringify({ foo: "bar" });

const options = {
    hostname: "mockbin.com",
    port: 80,
    path: "/request?foo=bar&foo=baz",
    method: "POST",
    headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        "Content-Legth": Buffer.byteLength(postData)
    }
}

const req = http.request(options, (res) => {
    res.on("data", (chunk) => {
        console.log(chunk.toString("utf-8"));
    });
    res.on("end", (chunk) => {
        console.log("Ok!");
    });
    res.on("error", (err) => {
        console.log(`Error found ${err.message}`);
    });
});

req.on("error", (err) => {
    console.log(`Error found ${err.message}`);
});

req.write(postData);
req.end();

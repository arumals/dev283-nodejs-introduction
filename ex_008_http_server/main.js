const http = require("http");
const port = 8000;

const server = http.createServer((req,res) => {
    res.writeHead(200,{ "Content-Type" : "text/html" });
    res.end("Hello world!\n");
});

server.listen(port);

console.log(`Server listening on http://localhost:${port}/`);

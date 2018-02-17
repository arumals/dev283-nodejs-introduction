const http = require("http")
const url = "http://www.comoaprendi.com"

http.get(url,(stream) => {
    let counter = 0
    stream.on("data", (chunk) => {
        counter++
        console.log(chunk.toString("utf8"))
    })
    stream.on("end", () => {
        console.log(`response has ended with ${counter} chunks`)
    })
}).on("error", (err) => {
    if(err){
        console.log(`Got error: ${err.message}`)
    }
})

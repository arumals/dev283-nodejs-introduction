var Job = require("./job.js")
var job = new Job()

job.on("done", (details) => {
    console.log("Wekly email job was completed at", details.completedOn)
})

job.emit("start")

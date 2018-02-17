const EventEmmiter = require('events')

class Job extends EventEmmiter {
    constructor(ops){
        super(ops)
        this.on('start',() => {
            this.process()
        })
    }
    process(){
        setTimeout(() => {
            this.emit('done', { completedOn : new Date() })
        }, 1000)
    }
}

module.exports = Job

const express = require('express');
const app = express();

const middleware = (req,res,next) => {
    // ...
    req.generate = new Date();
    next();
}

const middleware2 = (req,res,next) => {
    console.log(req.generate);
    next();
}

app.get('/', (req,res,next) => {
    res.send('Home Page');
})

app.use(middleware);
app.use(middleware2);
app.listen(3000);
console.log('server started on http://localhost:3000')

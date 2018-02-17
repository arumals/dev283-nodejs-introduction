const express = require('express');
const app = express();

app.use((req, res, next) => {
    console.log('middleware called');
    next();
})

app.use((req, res, next) => {
    console.log('middleware 2 called');
    next();
})

app.get('/a', (req,res) => {
    res.send('page a');
});

app.get('/b', (req,res) => {
    res.send('page b');
})

app.listen(3000);

const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.post('/', (req, res) => {
    console.log(req.body);
    res.send({msg:'transactions'});
});

app.listen(3000);

console.log('listening on http://localhost:3000');

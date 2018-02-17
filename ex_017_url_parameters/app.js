const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());

let profiles = [{
    name: "John Doe",
}];

app.get('/profile', (req, res) => {
    res.send(profiles);
});

app.post('/profile', (req, res) => {
    profiles.push(req.body);
    console.log('created', profiles);
    res.sendStatus(201);
});

app.put('/profile/:id', (req, res) => {
    Object.assign(profiles[req.params.id], req.body);
    console.log('updated', profiles);
    res.sendStatus(204);
});

app.delete('/profile/:id', (req, res) => {
    profiles.splice(req.params.id, 1);
    console.log('deleted', profiles);
    res.sendStatus(204);
});

app.listen(3000);

console.log('Server listening on http://localhost:3000');

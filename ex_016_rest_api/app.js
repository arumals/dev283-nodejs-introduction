const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());

let profile = {
    username: 'John Doe',
    email: 'johndoe@fake.org',
    url: 'http://johndoeswebsite.com',
}

app.get('/profile', (req, res) => {
    res.send(profile);
});

app.post('/profile', (req, res) => {
    const newProfile = req.body;
    console.log('created', newProfile);
    res.sendStatus(201);
});

app.put('/profile', (req, res) => {
    Object.assign(profile, req.body);
    console.log('updated', profile);
    res.sendStatus(204);
});

app.delete('/profile', (req, res) => {
    profile = {};
    console.log('deleted', profile);
    res.sendStatus(204);
});

app.listen(3000);

console.log('Server started on http://localhost:3000');

// imports
const express = require('express');
const bodyParser = require('body-parser');
const errorhandler = require('errorhandler');
const morgan = require('morgan');
const mongoose = require('mongoose');

// connect to mongoose
mongoose.connect('mongodb://localhost/test')
.then(() => console.log('connected to mongodb'))
.catch((err) => {
    if(err) {
        console.error('error found:', err.message);
        process.exit(-1);
    }
});

// prepare model
const Account = mongoose.model('Account', {
    name: String,
    balance: Number,
});

// create the app
const app = express();

// enable body parser
app.use(bodyParser.json());

// enable morgan
app.use(morgan('combined'));

// enable errorhandler
app.use(errorhandler());

// get : load profiles
app.get('/accounts', (req, res) => {
    // retrieve accounts
    Account.find({},(err, docs) => {
        if(err) return res.status(500).send(err.message);
        res.send(JSON.stringify(docs, undefined, 2));
    });
});

// post
app.post('/accounts', (req, res) => {
    // capture account
    const account = new Account(req.body);
    // save new account
    account.save((err, doc) => {
        if(err) return res.status(500).send(err.message);
        res.send(JSON.stringify(doc, undefined, 2));
    });
});

// delete
app.delete('/accounts/:id', (req, res) => {
    // remove account
    Account.remove({ _id: req.params.id }, (err, docs) => {
        if(err) return res.status(500).send(err.message);
        res.send(JSON.stringify(docs, undefined, 2));
    });
});

// put
app.put('/accounts/:id',(req, res) => {
    // update an account
    Account.update({ _id: req.params.id }, req.body, (err, docs) => {
        if(err) return res.status(500).send(err.message);
        res.send(JSON.stringify(docs, undefined, 2));
    });
});

app.listen(3000, () => {
    console.log(`listening on http://localhost:3000`);
});

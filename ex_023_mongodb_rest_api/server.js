// imports
const express = require('express');
const logger = require('morgan');
const errorHandler = require('errorhandler');
const mongodb = require('mongodb');
const mongo = mongodb.MongoClient;
const bodyParser = require('body-parser');

// assignments
const uri = 'mongodb://localhost:27017';
const app = express();

// middlewares
app.use(logger('dev'));
app.use(bodyParser.json());

// connect to db
mongo.connect(uri, (err, con) => {

    // collection
    const accountsCollection = con.db('dbx').collection('accounts');

    // on error connection exit
    if(err){
        console.log(`Can't connect to ${uri}`);
        process.exit(1);
    }

    app.get('/accounts',(req, res) => {
        const accounts = accountsCollection.find({}).toArray((err, accounts) => {
            if(err) {
                console.log(err);
                return res.sendStatus(500);
            }
            res.send(JSON.stringify(accounts, null, 2));
        });
    });

    app.post('/accounts',(req, res) => {
        const newAccount = req.body;
        accountsCollection.insert(newAccount, (err, results) => {
            if(err) {
                console.log(err);
                return res.sendStatus(500);
            }
            res.send(JSON.stringify(results, null, 2));
        });
    });

    app.put('/accounts/:id', (req, res) => {
        const _id = req.params.id;
        const updatingValues = req.body;
        accountsCollection.update({ _id }, { $set: updatingValues }, (err, results) => {
            if(err){
                return res.sendStatus(500);
            }
            res.send(JSON.stringify(results, null, 2));
        });
    });

    app.delete('/accounts/:id', (req, res) => {
        const _id = req.params.id;
        accountsCollection.remove({ _id }, (err, results) => {
            if(err){
                return res.sendStatus(500);
            }
            res.send(JSON.stringify(results, null, 2));
        });
    });

    app.listen(3000);

    console.log('Listening on http://localhost:3000');

});



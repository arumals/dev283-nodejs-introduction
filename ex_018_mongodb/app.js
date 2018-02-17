const mongodb = require('mongodb');
const db = mongodb.MongoClient;
const url = 'mongodb://localhost:27017/prueba';

db.connect(url, (err, con) =>{
    if(err) return process.exit(0);
    console.log('Connected successfully');
    con.close();
});


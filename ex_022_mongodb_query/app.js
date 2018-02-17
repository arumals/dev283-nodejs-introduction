const mongodb = require('mongodb').MongoClient;
const uri = 'mongodb://localhost:27017';

const name = process.argv[2] || '';

mongodb.connect(uri, (err, con) => {
    // exit if error
    if(err){
        console.log(`can't connect to mongo server: ${uri}`);
        process.exit(1);
    }
    // query students with provided error
    con.db('school').collection('students')
        .find({ name }).toArray((err, docs) => {
            // if error exit
            if(err){
                console.log(`Error when trying to perform the query`);
                process.exit(1);
            }
            // show results
            console.log(docs);
            process.exit(0);
        })
});

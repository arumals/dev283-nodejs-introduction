const mongodb = require('mongodb').MongoClient;
const uri = 'mongodb://localhost:27017';

const name = process.argv[2] || '';

mongodb.connect(uri, (err, con) => {

    // if error end process
    if(err){
        console.log(`can't connect to mongo server: ${url}`);
        process.exit(1);
    }

    // remove id
    con
    .db('school')
    .collection('students')
    .remove({ name }, (err, results) => {

        // if error found
        if(err){
            console.log(`can't remove with the name ${name}`);
            process.exit(1);
        }

        // success
        console.log(`${results.result.n} students removed from collection`);
        process.exit(0);

    });

});

// update an existent document with mongodb
const mongodb = require('mongodb').MongoClient;

mongodb.connect('mongodb://localhost:27017', (err, con) => {

    // if there is an error stop the process
    if(err){
        console.log("Can't stablish connection to :27017");
        return process.exit(1);
    }

    // update an existent value
    con
    .db('school')
    .collection('students')
    .update({},{ $set:{ specialty: 'student'}}, { multi: true }, (err, docs) => {

        // if there is an error stop the process
        if(err) {
            console.log("Cant update documents");
            return process.exit(1);
        }

        // show updated documents
        console.log(`${docs.result.n} documents updated`);

        // exit
        process.exit(0);

    });


});

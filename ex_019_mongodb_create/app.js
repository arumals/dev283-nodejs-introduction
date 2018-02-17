const mongodb = require('mongodb');
const db = mongodb.MongoClient;
const url = 'mongodb://localhost:27017';

db.connect(url, (err, con) => {

    // if error found exit
    if(err) return process.exit(-1);

    // students collection
    const students = [
        {nombre: 'Pedro'},
        {nombre: 'Karla'},
        {nombre: 'Andres'},
    ]

    console.log('inserting data...');

    // insert students
    con.db('school').collection('students').insert(students, (err, doc) => {
        if(err) return process.exit(1);
        console.log('documents inserted', doc.ops);
        process.exit(0);
    });

});



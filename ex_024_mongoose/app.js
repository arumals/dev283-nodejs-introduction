const mongoose = require('mongoose');
const uri = `mongodb://localhost:27017/test`;

mongoose.connect(uri);
const AuthorModel = mongoose.model('author', { name: String });
const Author = new AuthorModel({ name: 'Gabriel Garcia Marquez' });

Author.save((err, author) => {
    if(err) {
        console.log(`Error encontrado`, err);
        process.exit(-1);
    }
    console.log(`Nuevo author`, author);
    process.exit(0);
});

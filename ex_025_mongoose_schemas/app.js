const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/test');

const BookSchema = mongoose.Schema({
    name: String,
    createdAt: {
        type: Date,
        default: function() {
            return (new Date()).toISOString();
        },
    },
    updatedAt: {
        type: Date,
        default: Date.now
    },
    isPublished: {
        type: Boolean,
        default: false,
    },
    authorId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
    },
    description: {
        type: String,
        default: null,
    },
    isActive: {
        type: Boolean,
        default: false,
    },
    version: {
        type: Number,
        default(){
            return 1;
        }
    }
});

const BookModel = mongoose.model('Libro', BookSchema);

const myBook = new BookModel({
    name: "Cien años de soledad",
    description: "Excelente novela",
    authorId: mongoose.Types.ObjectId(),
});

myBook.save((err, libro) => {
    if(err) {
        console.log(err.message);
        process.exit(-1);
    }
    console.log('new book:', libro);
    process.exit(0);
});

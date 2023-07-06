const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const convertCase = (value) => {
    return value.toLowerCase()
}

const BookSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    isbn: {
        type: String,
        required: true
    },
    status: {
        type: [String],
        enum: ["available", "out of stock"],
        required: true,
        set: convertCase
    },
    price: {
        type: Number,
        required: true
    }
   
},
{
    timestamps: true
});

module.exports = mongoose.model("Book", BookSchema)
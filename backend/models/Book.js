const mongoose = require('../db/conn');
const {Schema} = mongoose

const Book = mongoose.model(
    'Book',
    new Schema({
        title: {
            type: String,
            required: true,
        },
        subtitle: {
            type: String,
        },
        authors: {
            type: Array,
            required: true,
        },
        publisher: {
            type: String,
        },
        publishedDate: {
            type: String,
        },
        description: {
            type: String,
        },
        ISBN: {
            type: String,
        },
        pageCount: {
            type: Number,
        },
        averageRating: {
            type: Number,
        },
        thumbnail: {
            type: String,
        },
        language: {
            type: String,
        },
        amount: {
            type: Number,
        },
        buyLink: {
            type: String,
        },
        categories: {
            type: String,
        }
    },
    {timestamps: true},
    )
);

module.exports = Book;

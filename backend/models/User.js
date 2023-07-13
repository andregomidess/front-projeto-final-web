const mongoose = require('../db/conn');
const Book = require('./Book');
const {Schema} = mongoose

const User = mongoose.model(
    'User',
    new Schema({
        name: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
        },
        password: {
            type: String,
            required: true,
        },
        permission: {
            type: String,
            default: 'USUARIO',
        },
        image: {
            type: String,
        },
        booksFavorite: {
            type: Array,
        }
    },
    {timestamps: true},
    )
);

module.exports = User;
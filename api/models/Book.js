const mongoose = require('mongoose');

// Schema to enforce consistent structure.
const BookSchema = new mongoose.Schema({
    title: String,
    author: String,
    publisher: String,
    isbn: String,
    edition: String,
    updatedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Book', BookSchema);
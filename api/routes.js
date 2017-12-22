const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Book = require('./models/Book.js');

/* GET /Books listing. */
router.get('/', (req, res, next) => {
    Book.find().sort({ updatedAt: -1 }).exec((err, books) => {
        if (err) return next(err);
        res.json(books);
    });
});

/* POST /book */
router.post('/', (req, res, next) => {
    Book.create(req.body, (err, book) => {
        if (err) return next(err);
        console.log('New Book Added:');
        console.log(book);
        res.json(book);
    });
});

module.exports = router;
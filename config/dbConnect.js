const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://puds:senha@cluster0.hllf2ky.mongodb.net/?retryWrites=true&w=majority");
let db = mongoose.connection;

module.exports = db;

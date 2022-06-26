const mongoose = require('mongoose');

const livroSchema = new mongoose.Schema({
    nome: {
        type: String, 
        required: true,
        unique: true // para validação
    },
    autor: {
        type: String, 
        required: true
    },
    data: {
        type: Date, 
        required: true,
    }
});


module.exports = mongoose.model('Livro', livroSchema);
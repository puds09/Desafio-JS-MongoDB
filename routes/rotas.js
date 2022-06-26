const { Router, json } = require('express')
const express = require('express')
const livro = require('../models/livro.js')
const Livro = require('../models/livro.js')
const rotas = express.Router()

// form para cadastro de livro
rotas.get("/", (req, res) => {
    res.render("form")
})
// form para cadastro de livro
rotas.post("/", (req, res) => {
    res.render("form")
})

// url para salvar livro no BD
rotas.post("/persistencia", async (req, res) => {

    const livro = new Livro({
        nome: `${req.body.nome}`,
        autor: `${req.body.autor}`,
        data: `${req.body.data}`,
    });

// Usando promise
    livro.save()
        .then(() => {
            res.redirect("/lista")
        })
        .catch((err) => {
            console.log(err)
            res.redirect("/")
        })

})

// Usando async / await
rotas.get("/lista", async (req, res) => {   

    try {
        const livros = await Livro.find({})    
        res.render("persistencia", { livros: livros })
    } catch (err) {
        console.log(err)
        res.redirect("/")
    };


    // try {
    //     const livros = await Livro.find({});
    //     res.json(livros);
    // } catch {
    //     console.log(err)
    //     res.redirect("/")
    // }
});


module.exports = rotas;
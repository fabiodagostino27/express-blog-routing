const express = require("express");
const router = express.Router();

// Index
router.get("/", (req, res) => {
    const posts = [
        {
            id: "1",
            title: "Ciambellone soffice e goloso",
            content: "Il ciambellone è uno dei dolci più amati della tradizione italiana. Con la sua consistenza morbida e il sapore delicato, è perfetto per la colazione o una merenda golosa.",
            image: "./img/ciambellone.jpeg",
            tags: ["dolce", "colazione", "merenda", "tradizione", "ciambellone"]
        },
        {
            id: "2",
            title: "Cracker alla barbabietola: uno snack sano",
            content: "I cracker alla barbabietola sono un'alternativa salutare e gustosa agli snack tradizionali. Con il loro colore vivace e il sapore unico, sono ideali per una pausa snack nutriente.",
            image: "./img/cracker_barbabietola.jpeg",
            tags: ["snack", "salute", "barbabietola", "crackers", "vegano"]
        },
        {
            id: "3",
            title: "Pane fritto dolce: la ricetta irresistibile",
            content: "Il pane fritto dolce è una delizia che unisce il sapore croccante e la dolcezza, perfetto per un dessert o una merenda. Facile e veloce da preparare, conquisterà tutti.",
            image: "./img/pane_fritto_dolce.jpeg",
            tags: ["dolce", "dessert", "fritto", "facile", "pane"]
        },
        {
            id: "4",
            title: "Pasta alla barbabietola: un piatto colorato e saporito",
            content: "La pasta alla barbabietola è un piatto ricco di gusto e colore. La barbabietola dona un sapore dolce e una tonalità intensa che rende ogni piatto speciale.",
            image: "./img/pasta_barbabietola.jpeg",
            tags: ["pasta", "barbabietola", "colorato", "vegetariano", "ricetta"]
        },
        {
            id: "5",
            title: "Torta paesana: il dolce della tradizione contadina",
            content: "La torta paesana è un dolce rustico tipico delle campagne italiane. Con il suo sapore semplice e genuino, è perfetta per chi cerca un dolce ricco di tradizione.",
            image: "./img/torta_paesana.jpeg",
            tags: ["dolce", "tradizione", "contadina", "rustico", "torta"]
        }
    ];

    res.json(posts) 
});

// Show
router.get("/:id", (req, res) => {
    res.send(`Mostra post ${req.params.id}`)
});

// Create
router.post("/", (req, res) => {
    res.send("Creazione nuovo post")
});

// Update
router.put("/:id", (req, res) => {
    res.send(`Modifica integrale del post ${req.params.id}`)
});

// Modify 
router.patch("/:id", (req, res) => {
    res.send(`Modifica parziale del post ${req.params.id}`)
});

// Delete
router.delete("/:id", (req, res) => {
    res.send(`Cancellazione del post ${req.params.id}`)
});

module.exports = router
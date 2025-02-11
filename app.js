const express = require("express");
const app = express();
const port = 3000;
const routerPosts = require("./routers/posts");

app.use(express.static('public'));

app.get("/", (req, res) => {
    res.send("Server del mio blog")
})

app.get("/bacheca", (req, res) => {
    const posts = [
        {
          title: "Ciambellone soffice e goloso",
          content: "Il ciambellone è uno dei dolci più amati della tradizione italiana. Con la sua consistenza morbida e il sapore delicato, è perfetto per la colazione o una merenda golosa.",
          image: "./img/ciambellone.jpeg",
          tags: ["dolce", "colazione", "merenda", "tradizione", "ciambellone"]
        },
        {
          title: "Cracker alla barbabietola: uno snack sano",
          content: "I cracker alla barbabietola sono un'alternativa salutare e gustosa agli snack tradizionali. Con il loro colore vivace e il sapore unico, sono ideali per una pausa snack nutriente.",
          image: "./img/cracker_barbabietola.jpeg",
          tags: ["snack", "salute", "barbabietola", "crackers", "vegano"]
        },
        {
          title: "Pane fritto dolce: la ricetta irresistibile",
          content: "Il pane fritto dolce è una delizia che unisce il sapore croccante e la dolcezza, perfetto per un dessert o una merenda. Facile e veloce da preparare, conquisterà tutti.",
          image: "./img/pane_fritto_dolce.jpeg",
          tags: ["dolce", "dessert", "fritto", "facile", "pane"]
        },
        {
          title: "Pasta alla barbabietola: un piatto colorato e saporito",
          content: "La pasta alla barbabietola è un piatto ricco di gusto e colore. La barbabietola dona un sapore dolce e una tonalità intensa che rende ogni piatto speciale.",
          image: "./img/pasta_barbabietola.jpeg",
          tags: ["pasta", "barbabietola", "colorato", "vegetariano", "ricetta"]
        },
        {
          title: "Torta paesana: il dolce della tradizione contadina",
          content: "La torta paesana è un dolce rustico tipico delle campagne italiane. Con il suo sapore semplice e genuino, è perfetta per chi cerca un dolce ricco di tradizione.",
          image: "./img/torta_paesana.jpeg",
          tags: ["dolce", "tradizione", "contadina", "rustico", "torta"]
        }
    ];

    res.json(posts)
});

app.use("/posts", routerPosts);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
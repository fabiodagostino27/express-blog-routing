const express = require("express");
const router = express.Router();

// Index
router.get("/", (req, res) => {
   res.send("Lista dei post") 
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

module.exports = router
const express = require("express");
const router = express.Router();

// Index
router.get("/", (req, res) => {
   res.send("Lista dei post") 
});

module.exports = router
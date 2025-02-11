const express = require("express");
const app = express();
const port = 3000;
const routerPosts = require("./routers/posts");

app.use(express.static('public'));

app.get("/", (req, res) => {
    res.send("Server del mio blog")
})

app.use("/posts", routerPosts);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
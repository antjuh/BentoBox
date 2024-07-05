const express = require("express");
const apiRouter = express.Router();

apiRouter.get("/", (req, res) => {
    res.send("Api route /api");
});


apiRouter.use("/products", require("./products"));

module.exports = apiRouter;
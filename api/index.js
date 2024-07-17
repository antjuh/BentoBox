const express = require("express");
const apiRouter = express.Router();

apiRouter.get("/", (req, res) => {
    res.send("Api route /api");
});


apiRouter.use("/products", require("./products"));
apiRouter.use("/categories", require("./categories"));
apiRouter.use("/cart", require("./orderProducts"));
apiRouter.use("/reviews", require("./reviews"));

module.exports = apiRouter;
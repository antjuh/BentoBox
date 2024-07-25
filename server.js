const express = require('express')
const app = express()
const { PrismaClient } = require("@prisma/client")
const prisma = new PrismaClient();
const jwt = require("jsonwebtoken")
const {parseToken} = require("./utils/utils.js")



const port = process.env.PORT || 8080;


app.get('/', (req, res) => {
    res.send('Hello World!') 
});

app.use(express.json())

app.use(parseToken);


app.use("/api", require("./api"));

app.listen(port, () => {
    console.log(`App listening on port ${port}`)
})
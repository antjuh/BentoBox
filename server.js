const express = require('express')
const app = express()

const port = process.env.PORT || 8080;

app.get('/', (req, res) => {
    res.send('Hello World!') 
});

app.use("/api", require("./api"));

app.listen(port, () => {
    console.log(`App listening on port ${port}`)
})
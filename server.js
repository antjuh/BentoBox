const express = require('express')
const app = express()
const {PrismaClient} = require("@prisma/client");

const prisma = new PrismaClient();
const port = process.env.PORT || 8080;

app.get('/', (req, res) => {
    res.send('Hello World!') 
});

app.use("/api", require("./api"));



app.get('/api/categories', async (req, res) => {
    const categories = await prisma.categories.findMany({
        include: {
            products: true,
        },
    });
    res.send(categories);
});

app.get('/api/categories/:id', async (req, res) => {
    const categories = await prisma.categories.findUnique({
        where: {
            id: parseInt(req.params.id),
        },
        include: {
            products: true,
        },
    });
    res.send(categories);
})


app.listen(port, () => {
    console.log(`App listening on port ${port}`)
})
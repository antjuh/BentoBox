const express = require('express')
const categoryRouter = express.Router();
const {PrismaClient} = require("@prisma/client");
const prisma = new PrismaClient();


categoryRouter.get('/', async (req, res) => {
    const categories = await prisma.categories.findMany({
        include: {
            products: true,
        },
    });
    res.send(categories);
});

categoryRouter.get('/:id', async (req, res) => {
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

module.exports = categoryRouter;
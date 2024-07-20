const express = require('express')
const categoryRouter = express.Router();
const {PrismaClient} = require("@prisma/client");
const prisma = new PrismaClient();

//Don't need to delete or create any categories. Get will be enough for this route.

//Get all categories with their items
categoryRouter.get('/', async (req, res) => {
    try {
        const categories = await prisma.categories.findMany({
            // include: {
            //     products: true,
            // },
        });
        res.send(categories);
    } catch(err) {
        console.log(err)
        res.sendStatus(500)
    }
});

//Get certain category :id , with items
categoryRouter.get('/:id', async (req, res) => {
    try {
        const categories = await prisma.categories.findUnique({
            where: {
                id: parseInt(req.params.id),
            },
            include: {
                products: true,
            },
        });
    res.send(categories);
    } catch(err) {
        console.log(err)
        res.sendStatus(500)
    }
})

module.exports = categoryRouter;
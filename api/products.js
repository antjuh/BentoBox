const express = require('express')
const prodRouter = express.Router();
const {PrismaClient} = require("@prisma/client");
const prisma = new PrismaClient();

// Get all menu items
prodRouter.get('/', async (req, res) => {
    const menu = await prisma.products.findMany({
        include: {
            category: true,
        },
    });
    res.send(menu);
});

module.exports = prodRouter;
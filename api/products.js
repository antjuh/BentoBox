const express = require('express')
const prodRouter = express.Router();
const {PrismaClient} = require("@prisma/client");
const prisma = new PrismaClient();

// Get all menu items
prodRouter.get('/', async (req, res) => {
    try {
        const menu = await prisma.products.findMany({
            include: {
                category: true,
            },
        });
        res.send(menu);
    } catch(err) {
        console.log(err)
        res.sendStatus(500)
    }
});

//Get single item
prodRouter.get('/:id', async (req, res) => {
    try {
        const item = await prisma.products.findUnique({
            where: {
                id: parseInt(req.params.id)
            },
            include: {
                category: true,
            },
        });
        res.send(item);
    } catch(err) {
        console.log(err)
        res.sendStatus(500)
    }
});

//Add new item
prodRouter.post('/', async (req, res) => {
    try {
        const item = await prisma.products.create({
            data: req.body
        });
        res.send(item);
    } catch(err) {
        console.log(err)
        res.sendStatus(500)
    }
});

//Delete item 
prodRouter.delete('/:id', async (req, res) => {
    try {
        const deleteItem = await prisma.products.delete({
            where: {
                id: parseInt(req.params.id)
            }
        });
        res.send(deleteItem);
    } catch(err) {
        console.log(err)
        res.sendStatus(500)
    }
    
})

//Update an item
prodRouter.put('/:id', async (req, res) => {
    try {
        const updateItem = await prisma.products.update({
            where: {
                id: parseInt(req.params.id)
            },
            data: req.body
        })
        res.send(updateItem)
    } catch(err) {
        console.log(err)
        res.sendStatus(500)
    }
})


module.exports = prodRouter;
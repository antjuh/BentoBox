const express = require('express')
const cartRouter = express.Router();
const {PrismaClient} = require("@prisma/client");
const prisma = new PrismaClient();

//This is your cart.

//Get cart with :id
cartRouter.get('/:id', async (req, res) => {
    try {
        const cart = await prisma.orderProducts.findUnique({
            where: {
                orderId: parseInt(req.params.id)
            },
            include: {
                product: true,
            }         
        })
        res.send(cart);
    } catch(err) {
        console.log(err)
        res.sendStatus(500)
    }
});

//Update cart item quantity
cartRouter.put('/:id/:productId', async (req, res) => {
    try {
        const cart = await prisma.orderProducts.update({
            where: {
                orderId: parseInt(req.params.id),
                productId: parseInt(req.params.productId)
            },
            data: req.body
        })
        res.send(cart);
    } catch(err) {
        console.log(err)
        res.sendStatus(500)
    }
});

module.exports = cartRouter;
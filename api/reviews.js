const express = require('express')
const reviewRouter = express.Router();
const {PrismaClient} = require("@prisma/client");
const prisma = new PrismaClient();


reviewRouter.get('/', async (req, res) => {
    try {
        const reviews = await prisma.reviews.findMany({
            include: {
                product: true,
                user: true,
            },
            orderBy: {
                rating: 'desc'
            }
        })
        res.send(reviews);
    } catch(err){
        console.log(err);
        res.sendStatus(500)
    }
});

reviewRouter.get('/topThree', async (req, res) => {
    try {
        const reviews = await prisma.reviews.findMany({
            include: {
                product: true,
                user: true,
            },
            orderBy: {
                rating: 'desc'
            }
        })
        res.send([reviews[0],reviews[1],reviews[2]]);
    } catch(err){
        console.log(err);
        res.sendStatus(500)
    }
});

module.exports = reviewRouter;
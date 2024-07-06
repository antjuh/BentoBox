const express = require('express')
const cartRouter = express.Router();
const {PrismaClient} = require("@prisma/client");
const prisma = new PrismaClient();


cartRouter.get('/', async (req, res) => {

});

module.exports = cartRouter;
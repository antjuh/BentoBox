const express = require('express')
const orderRouter = express.Router();
const {PrismaClient} = require("@prisma/client");
const prisma = new PrismaClient();


orderRouter.get('/', async (req, res) => {

});

module.exports = orderRouter;
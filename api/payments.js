const express = require('express')
const paymentRouter = express.Router();
const {PrismaClient} = require("@prisma/client");
const prisma = new PrismaClient();


paymentRouter.get('/', async (req, res) => {

});

module.exports = paymentRouter;
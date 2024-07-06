const express = require('express')
const reviewRouter = express.Router();
const {PrismaClient} = require("@prisma/client");
const prisma = new PrismaClient();


reviewRouter.get('/', async (req, res) => {

});

module.exports = reviewRouter;
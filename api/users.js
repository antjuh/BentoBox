const express = require('express')
const userRouter = express.Router();
const {PrismaClient} = require("@prisma/client");
const prisma = new PrismaClient();


userRouter.get('/', async (req, res) => {

});

module.exports = userRouter;
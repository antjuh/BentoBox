const express = require('express')
const userRouter = express.Router();
const {PrismaClient} = require("@prisma/client");
const prisma = new PrismaClient();

const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { requireUser } = require('../utils/utils');
const saltRounds = 10;



userRouter.get('/me', requireUser, async (req, res) => {
        res.send(req.user)
});

userRouter.post('/register', async (req, res) => {
    try{
        console.log(req.body)
        const hashPass = await bcrypt.hash(req.body.password, saltRounds);
        const newUser = await prisma.users.create({
            data: {
                username: req.body.username,
                password: hashPass,
                firstName: req.body.firstName,
                lastName: req.body.lastName
            }
        });
        if(newUser){
            const token = jwt.sign({
                data: {id: newUser.id}
            }, process.env.JWT_SECRET)
            console.log("Token:", token)
            res.send({token: token});
        }
    }catch(err){
        console.log(err)
        res.sendStatus(500)
    }
});

userRouter.post('/login', async (req, res) => {
    try {
        const username = req.body.username;
        const password = req.body.password;

        const foundUser = await prisma.users.findUnique({
            where: {
                username: username
            }
        })
        if(!foundUser){
            res.status(401).send({message: "Invalid Login Credentials"})
        }else{
            const match = await bcrypt.compare(password, foundUser.password);
            if(!match){
                res.status(401).send({message: "Invalid Login Credentials"})
            }else{
                const token = jwt.sign({
                    data: {id: foundUser.id}
                }, process.env.JWT_SECRET)
                console.log("Token:", token)
                res.send({token: token});
            }
        } 
    } catch(err){
        console.log(err)
        res.sendStatus(500)
    }
});

userRouter.post('/admin', async (req, res) => {
    try {
        const username = req.body.username;
        const password = req.body.password;

        const foundUser = await prisma.administrators.findFirst({
            where: {
                username: username
            }
        })
        if(!foundUser){
            res.status(401).send({message: "Invalid Login Credentials"})
        }else{
            const match = await bcrypt.compare(password, foundUser.password);
            if(!match){
                res.status(401).send({message: "Invalid Login Credentials"})
            }else{
                const token = jwt.sign({
                    data: {id: foundUser.id}
                }, process.env.JWT_SECRET)
                console.log("Token:", token)
                res.send({token: token});
            }
        } 
    } catch(err){
        console.log(err)
        res.sendStatus(500)
    }
});

module.exports = userRouter;
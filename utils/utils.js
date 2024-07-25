const { PrismaClient } = require("@prisma/client")
const prisma = new PrismaClient();
const jwt = require("jsonwebtoken")


const requireUser = (req, res, next) => {
    if(req.user){
        next();
    }
    else{
        res.sendStatus(401)
    }
}

const parseToken =  async (req, res, next) => {
    const authHeader = req.header("Authorization");
    const prefix = "Bearer ";
    
    if(!authHeader){
        next();
    }else if(authHeader.startsWith(prefix)){
        const token = authHeader.slice(prefix.length);
        const { data } = jwt.verify(token, process.env.JWT_SECRET)
        if(!data){
            next();
        }else{
            const userId = data.id;
            const user = await prisma.users.findUnique({
                where: {
                    id: userId
                },
                include: {
                    orders: {
                        include: {
                            orderProducts: {
                                include: {
                                    product: true
                                }
                            }
                        }
                    }
                
                }
            })
            console.log(user)
            req.user = user;
            next();
            
        }
        
    }else{
        next();
    }
}

module.exports = {
    requireUser,
    parseToken
}
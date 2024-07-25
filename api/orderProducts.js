const express = require('express')
const cartRouter = express.Router();
const {PrismaClient} = require("@prisma/client");
const prisma = new PrismaClient();

//This is your cart.

//Get cart with :id
cartRouter.get('/:id', async (req, res) => {
    try {
        const cart = await prisma.orderProducts.findMany({
            where: {
                orderId: parseInt(req.params.id),
            },
            include: {
                product: true,
            },
            orderBy: {
                id: 'asc'
            }         
        })
        res.send(cart);
    } catch(err) {
        console.log(err)
        res.sendStatus(500)
    }
});


//Get item quantity
async function getQuantity (id, productId) {
    const response = await prisma.orderProducts.findMany({
        where: {
            orderId: id,
            productId: productId
        },
        select: {
            quantity: true,
        },
    })
    //If no quantity, return 0
    // console.log(response)
    if(response.length === 0) {
        return 0;
    }
    //Otherwise return quantity
    return response[0].quantity;
}

//Add item to cart
cartRouter.post('/:id/:productId', async (req, res) => {
    try {
        //Checking for item quantity
        let itemQuantity = await getQuantity(parseInt(req.params.id), parseInt(req.params.productId));
        // If item has no quantity, add the item to cart with quantity of 1
        if(itemQuantity === 0) {
            const addItem = await prisma.orderProducts.create({
                data: {
                    orderId: parseInt(req.params.id),
                    productId: parseInt(req.params.productId),
                    quantity: 1
                }
            })
            res.send(addItem)
        }else{
            //Else update item quantity instead
            itemQuantity++;
            // console.log(itemQuantity)
            const updateQuantity = await prisma.orderProducts.updateMany({
                where: {
                        orderId: parseInt(req.params.id),
                        productId: parseInt(req.params.productId),
                    
                },
                data: {
                    quantity: itemQuantity,
                }
            })
            res.send("Quantity Updated")
        }
    } catch(err) {
        console.log(err)
        res.sendStatus(500)
    }
});


cartRouter.delete('/:id/:productId', async (req, res) => {
    try {
        let itemQuantity = await getQuantity(parseInt(req.params.id), parseInt(req.params.productId))

        if(itemQuantity > 1){
            itemQuantity--;
            const updateQuantity = await prisma.orderProducts.updateMany({
                where: {
                        orderId: parseInt(req.params.id),
                        productId: parseInt(req.params.productId),
                    
                },
                data: {
                    quantity: itemQuantity,
                }
            })
            res.send("Quantity Updated")
        }else {
            const deleteItem = await prisma.orderProducts.deleteMany({
                where: {
                    orderId: parseInt(req.params.id),
                    productId: parseInt(req.params.productId), 
                },
            })
            res.send("Item Deleted")
        }
    } catch(err) {
        console.log(err)
        res.sendStatus(500)
    }
});

cartRouter.delete('/:id/:productId/deleteAll', async (req, res) => {
    try {
        const deleteAll = await prisma.orderProducts.deleteMany({
            where: {
                orderId: parseInt(req.params.id),
                productId: parseInt(req.params.productId)
            }
        })
        res.send("Deleted all of that item.")
    } catch(err) {
        console.log(err)
        res.sendStatus(500)
    }
})



module.exports = cartRouter;
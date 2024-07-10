const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient();

async function getCart(orderId) {
    try{

    }catch(err){
        console.log(err)
    }
}

async function getCartItemQuantity(productId, orderId) {
    try{

    }catch(err){
        console.log(err)
    }
}

async function addToCart(orderId, productId, userId) {
    try{

    }catch(err){
        console.log(err)
    }
}

async function removeFromCart(orderId, productId, userId) {
    try{

    }catch(err){
        console.log(err)
    }
}

    // async function deleteProduct (id) {
    //     await prisma.products.delete({
    //         where: {
    //             id: id,
    //         },
    //     })
    // }
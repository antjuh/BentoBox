const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

async function main() {
    console.log("Seeding DB");

    //CREATING CATEGORIES
    await prisma.categories.create({
        data: {
            name: "Maki Roll"
        }
    });
    await prisma.categories.create({
        data: {
            name: "Sashimi"
        }
    })
    await prisma.categories.create({
        data: {
            name: "Nigiri"
        }
    })
    await prisma.categories.create({
        data: {
            name: "Ramen"
        }
    })


    //CREATING FOOD ITEMS (SUSHI)//
    await prisma.products.create({
        data: {
            // imageUrl: ,
            name: "California Roll",
            price: 10.99,
            categ_id: 1
        }
    });
    await prisma.products.create({
        data: {
            // imageUrl: ,
            name: "Dragon Roll",
            price: 13.69,
            categ_id: 1
        }
    });
    await prisma.products.create({
        data: {
            // imageUrl: ,
            name: "Salmon Roll",
            price: 16.89,
            categ_id: 1
        }
    });
    await prisma.products.create({
        data: {
            // imageUrl: ,
            name: "Shrimp Tempura Roll",
            price: 12.99,
            categ_id: 1
        }
    });
    await prisma.products.create({
        data: {
            // imageUrl: ,
            name: "Philidelphia Roll",
            price: 10.89,
            categ_id: 1
        }
    });
    await prisma.products.create({
        data: {
            // imageUrl: ,
            name: "Rainbow Roll",
            price: 13.99,
            categ_id: 1
        }
    });
    await prisma.products.create({
        data: {
            // imageUrl: ,
            name: "Spider Roll",
            price: 14.89,
            categ_id: 1
        }
    });
    await prisma.products.create({
        data: {
            // imageUrl: ,
            name: "Spicy Tuna Roll",
            price: 13.79,
            categ_id: 1
        }
    });
    await prisma.products.create({
        data: {
            // imageUrl: ,
            name: "Dynamite Roll",
            price: 13.79,
            categ_id: 1
        }
    });

    //CREATING FOOD ITEMS (SASHIMI)
    await prisma.products.create({
        data: {
            // imageUrl: ,
            name: "Salmon",
            price: 19.69,
            categ_id: 2
        }
    });
    await prisma.products.create({
        data: {
            // imageUrl: ,
            name: "Maguro",
            price: 18.89,
            categ_id: 2
        }
    });
    await prisma.products.create({
        data: {
            // imageUrl: ,
            name: "Katsuo",
            price: 13.69,
            categ_id: 2
        }
    });
    await prisma.products.create({
        data: {
            // imageUrl: ,
            name: "Buri",
            price: 16.99,
            categ_id: 2
        }
    });
    await prisma.products.create({
        data: {
            // imageUrl: ,
            name: "Tai",
            price: 13.99,
            categ_id: 2
        }
    });

    //CREATING FOOD ITEMS (NIGIRI)
    await prisma.products.create({
        data: {
            // imageUrl: ,
            name: "Tamago",
            price: 8.99,
            categ_id: 3
        }
    });
    await prisma.products.create({
        data: {
            // imageUrl: ,
            name: "Ika",
            price: 10.99,
            categ_id: 3
        }
    });
    await prisma.products.create({
        data: {
            // imageUrl: ,
            name: "Mirugai",
            price: 7.99,
            categ_id: 3
        }
    });
    await prisma.products.create({
        data: {
            // imageUrl: ,
            name: "Ebi",
            price: 9.69,
            categ_id: 3
        }
    });
    await prisma.products.create({
        data: {
            // imageUrl: ,
            name: "Tobi-Tarma",
            price: 11.89,
            categ_id: 3
        }
    });
    await prisma.products.create({
        data: {
            // imageUrl: ,
            name: "Unagi",
            price: 9.69,
            categ_id: 3
        }
    });





}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
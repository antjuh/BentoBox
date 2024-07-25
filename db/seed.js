const { PrismaClient } = require('@prisma/client')
const bcrypt = require("bcrypt");
const saltRounds = 10;

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
            imageUrl: "../src/assets/menu/californiaRoll.jpg" ,
            name: "California Roll",
            price: 10.99,
            categ_id: 1,
            description: "California roll or California maki is an uramaki containing imitation crab and freshly grown avocado and cucumber."
        }
    });
    await prisma.products.create({
        data: {
            imageUrl: "../src/assets/menu/dragonRoll.jpg" ,
            name: "Dragon Roll",
            price: 13.69,
            categ_id: 1,
            description: "Wrapped tender poached shrimp, crisp cucumber, creamy avocado, sweet mango, and seasoned rice in nori for this savory American-style sushi roll."
        }
    });
    await prisma.products.create({
        data: {
            imageUrl: "../src/assets/menu/salmonRoll.jfif",
            name: "Salmon Roll",
            price: 16.89,
            categ_id: 1,
            description: "Homemade maki roll made with sushi rice, nori, and smoked salmon."
        }
    });
    await prisma.products.create({
        data: {
            imageUrl: "../src/assets/menu/shrimpTempRoll.webp" ,
            name: "Shrimp Tempura Roll",
            price: 12.99,
            categ_id: 1,
            description: "Shrimp Tempura Roll or Ebiten Maki Sushi (エビ天巻き寿し) is a type of maki sushi that includes tempura fried shrimp rolled in seasoned sushi rice and nori. In Japan, the roll is usually made with nori on the outside. "
        }
    });
    await prisma.products.create({
        data: {
            imageUrl: "../src/assets/menu/philidelphiaRoll.jpg",
            name: "Philidelphia Roll",
            price: 10.89,
            categ_id: 1,
            description: "A Philadelphia roll is a makizushi type of sushi made with smoked salmon, cream cheese, and cucumber, with the rice on the outside."
        }
    });
    await prisma.products.create({
        data: {
            imageUrl: "../src/assets/menu/rainbowRoll.jpg" ,
            name: "Rainbow Roll",
            price: 13.99,
            categ_id: 1,
            description: "A rainbow roll is a type of uramaki sushi roll that includes seasoned rice, raw fish, nori, cucumber, avocado, and crab stick."
        }
    });
    await prisma.products.create({
        data: {
            imageUrl: "../src/assets/menu/spiderRoll.avif",
            name: "Spider Roll",
            price: 14.89,
            categ_id: 1,
            description: "A spider roll is a type of makizushi sushi that features tempura-fried soft shell crab, cucumber, avocado, and spicy mayonnaise rolled in nori and sushi rice."
        }
    });
    await prisma.products.create({
        data: {
            imageUrl: "../src/assets/menu/spicyTunaRoll.avif" ,
            name: "Spicy Tuna Roll",
            price: 13.79,
            categ_id: 1,
            description: "A spicy tuna roll is a makizushi roll that contains raw tuna, spicy mayo, and is seasoned with Ichimi togarashi."
        }
    });
    await prisma.products.create({
        data: {
            imageUrl: "../src/assets/menu/dynamiteRoll.jpg" ,
            name: "Dynamite Roll",
            price: 13.79,
            categ_id: 1,
            description: "White rice, nori (dried seaweed), tempura, shrimp, kani kama, cucumber, avocado, sriracha aioli, oyster sauce, and soy sauce. Each roll is served with wasabi and pickled ginger on the side."
        }
    });

    //CREATING FOOD ITEMS (SASHIMI)
    await prisma.products.create({
        data: {
            imageUrl: "../src/assets/menu/salmonSashimi.jpg" ,
            name: "Salmon",
            price: 19.69,
            categ_id: 2,
            description: "Thin sliced raw salmon, sourced right from Japan."
        }
    });
    await prisma.products.create({
        data: {
            imageUrl: "../src/assets/menu/maguroSashimi.webp" ,
            name: "Maguro",
            price: 18.89,
            categ_id: 2,
            description: "Thin slices of maguro tuna, caught and raised in Japan."
        }
    });
    await prisma.products.create({
        data: {
            imageUrl: "../src/assets/menu/katsuoSashimi.png" ,
            name: "Katsuo",
            price: 13.69,
            categ_id: 2,
            description: "Thinly sliced katsuo, or shipjack tuna."
        }
    });
    await prisma.products.create({
        data: {
            imageUrl: "../src/assets/menu/buriSashimi.jpg" ,
            name: "Buri",
            price: 16.99,
            categ_id: 2,
            description: "Thin slices of yellowtail buri, farmed in Japan."
        }
    });
    await prisma.products.create({
        data: {
            imageUrl: "../src/assets/menu/taiSashimi.avif" ,
            name: "Tai",
            price: 13.99,
            categ_id: 2,
            description: "Freshly caught sea bream, sourced naturally."
        }
    });

    //CREATING FOOD ITEMS (NIGIRI)
    await prisma.products.create({
        data: {
            imageUrl: "../src/assets/menu/tamagoNigiri.jpg" ,
            name: "Tamago",
            price: 8.99,
            categ_id: 3,
            description: "Features tamagoyaki (rolled omelet) on top of an oblong mound of sushi rice bound by a thin ribbon of nori seaweed"
        }
    });
    await prisma.products.create({
        data: {
            imageUrl: "../src/assets/menu/ikaNigiri.jpg" ,
            name: "Ika",
            price: 10.99,
            categ_id: 3,
            description: "Consists of hand-pressed sushi rice that's topped with slices of squid."
        }
    });
    await prisma.products.create({
        data: {
            imageUrl: "../src/assets/menu/mirugaiNigiri.jpg" ,
            name: "Mirugai",
            price: 7.99,
            categ_id: 3,
            description: "Fresh giant clam, caught and sourced in San Fransisco."
        }
    });
    await prisma.products.create({
        data: {
            imageUrl: "../src/assets/menu/ebiNigiri.jpg" ,
            name: "Ebi",
            price: 9.69,
            categ_id: 3,
            description: "Butterfly shrimp flayed over freshly prepared rice."
        }
    });
    await prisma.products.create({
        data: {
            imageUrl: "../src/assets/menu/tobiNigiri.jpg" ,
            name: "Tobi-Tarma",
            price: 11.89,
            categ_id: 3,
            description: "Flying-fish roe wrapped in fresh seaweed."
        }
    });
    await prisma.products.create({
        data: {
            imageUrl: "../src/assets/menu/unagiNigiri.jpg" ,
            name: "Unagi",
            price: 9.69,
            categ_id: 3,
            description: "Unagi is made of hand-pressed sushi rice, barbecued freshwater eel, and a strip of nori."
        }
    });

    await prisma.products.create({
        data: {
            imageUrl: "https://www.justonecookbook.com/wp-content/uploads/2023/04/Shoyu-Ramen-8308-I.jpg" ,
            name: "Shoyu",
            price: 11.69,
            categ_id: 4,
            description: "Shoyu ramen is a ramen dish with a broth made of soy sauce. It has high umami flavors along with a tangy strong taste"
        }
    });

    await prisma.products.create({
        data: {
            imageUrl: "https://glebekitchen.com/wp-content/uploads/2018/04/misoramentop-1.jpg" ,
            name: "Miso",
            price: 13.99,
            categ_id: 4,
            description: "Miso ramen is a noodle soup. Its broth is made from miso along with chicken stock, vegetables, and ground pork. This kind of ramen soup is thick and rich. "
        }
    });

    await prisma.products.create({
        data: {
            imageUrl: "https://gastroplant.com/wp-content/uploads/2019/08/1406_Vegan-Shio-Ramen_550.jpg" ,
            name: "Shio",
            price: 12.49,
            categ_id: 4,
            description: "Toothsome noodles are nestled in a base of dashi and clear chicken broth and topped with seasoned bamboo shoots, sliced chicken chashu, and jammy ramen eggs."
        }
    });

    await prisma.products.create({
        data: {
            imageUrl: "https://glebekitchen.com/wp-content/uploads/2017/04/tonkotsuramenfront.jpg" ,
            name: "Tonkotsu",
            price: 10.69,
            categ_id: 4,
            description: "Creamy soul-warming broth full of umami flavor, chewy noodles, and toppings of tender, fatty pork belly and soft boiled eggs."
        }
    });

    await prisma.administrators.create({
        data: {
            username: "admin",
            password: await bcrypt.hash("admin", saltRounds)
        }
    })
    //Creating Users
    await prisma.users.create({
        data: {
            firstName: "Bob",
            lastName: "Robertson",
            username: "bob",
            password: await bcrypt.hash("bob", saltRounds)
        }
    });
    await prisma.users.create({
        data: {
            firstName: "Susan",
            lastName: "Aldridge",
            username: "susald",
            password: "suspassword"
        }
    });
    await prisma.users.create({
        data: {
            firstName: "Terry",
            lastName: "Crooze",
            username: "tercro",
            password: "terpassword"
        }
    });
    
    await prisma.orders.create({
        data: {
            userId: 1
        }
    });



    await prisma.reviews.create({
        data: {
            content:"The salmon roll is the single best thing I have ever tried! And I hate sushi!",
            rating: 5,
            userId: 1,
            productId: 3,
        }
    })
    await prisma.reviews.create({
        data: {
            content:"Amazing, fresh ingredients!",
            rating: 4.5,
            userId: 2,
            productId: 5,
        }
    })
    await prisma.reviews.create({
        data: {
            content:"I thought it would come with spiders :( ",
            rating: 3,
            userId: 3,
            productId: 7,
        }
    })
    await prisma.reviews.create({
        data: {
            content:"I hate this thing",
            rating: 1.5,
            userId: 3,
            productId: 12,
        }
    })





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
import { PrismaClient } from "@prisma/client";

//initialize Prisma Client
const prisma = new  PrismaClient();

async function main() {
    //create data
    const post1 = await prisma.back.create({
        data: {
            name: 'Leche',
            description: 'leche evaporada natural de vaca',
            fechaV: '26 de junio del 2026',
            estado: 'completada',
        },
        
    });

    const post2 = await prisma.back.upsert({
        where: { name: 'Yogurt' },
        update: {},
        create: {
            name: 'Yogurt',
            description: 'yogurt de vaca natural',
            fechaV: '24 de julio del 2026',
            estado: 'pendiente',
        },
        
    });

    console.log({ post1, post2 }); 
}

//execute the main function
main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        //close prisma client at the end
        await prisma.$disconnect();
    });
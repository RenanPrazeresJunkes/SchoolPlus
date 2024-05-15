import { prisma } from "../src/lib/prisma"

async function seed(){
    const user = await prisma.user.create({
        data: {
            id: 1,
            name: 'Admin',
            email: 'admin@example.com',
            password: '123456',
        }
    })

    console.log(user)
}


seed().then(() => {
    console.log('Database seeded!')
   
})
import { ZodTypeProvider } from "fastify-type-provider-zod"
import z from "zod"
import { prisma } from "../lib/prisma"
import { FastifyInstance } from "fastify"
import { BadRequest } from "./_errors/bad-request"


export async function createUser(app: FastifyInstance) {
    app
    .withTypeProvider<ZodTypeProvider>()
    .post('/users', {
        schema: {
            body: z.object({
                name: z.string(),
                email: z.string().email(),
                password: z.string().min(6)
            }),
        }
    }, async (request, reply) => {
    
        const { name, email, password } = request.body
    
    
        const userWithSameEmail = await prisma.user.findUnique({
            where : {
                email
            }
        })
    
        if (userWithSameEmail !== null) {
            throw new BadRequest("Já existe um usuário com o mesmo email")
        }
    
        const user = await prisma.user.create({
            data: {
             name,
             email,
             password
            }
        })
    
        return reply.status(201).send({ userId: user.id })
    })    
}

import { ZodTypeProvider } from "fastify-type-provider-zod"
import z from "zod"
import { prisma } from "../lib/prisma"
import { FastifyInstance } from "fastify"
import { BadRequest } from "./_errors/bad-request"


export async function authUser(app: FastifyInstance) {
    app
    .withTypeProvider<ZodTypeProvider>()
    .post('/auth', {
        schema: {
            body: z.object({
                email: z.string().email(),
                password: z.string().min(6)
            }),
        }
    }, async (request, reply) => {
    
        const { email, password } = request.body
    
        const userCredentials = await prisma.user.findUnique({
            where : {
                email,
                password
            }
        })
    
        if (!userCredentials) {
            throw new BadRequest("Credenciais inválidas")
        }
    
        return reply.status(201).send({ userCredentials })
    })    
}

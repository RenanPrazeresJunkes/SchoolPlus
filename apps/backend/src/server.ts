import fastify from "fastify"
import { serializerCompiler, validatorCompiler } from "fastify-type-provider-zod"
import { createUser } from "./routes/create-user"

import { errorHandler } from "./utils/error-handler"
import fastifyCors from "@fastify/cors"
import { authUser } from "./routes/authenticate-user"

const app = fastify()

app.register(createUser)
app.register(authUser)

app.register(fastifyCors, {
    origin: '*'
})

app.setValidatorCompiler(validatorCompiler)
app.setSerializerCompiler(serializerCompiler)

app.setErrorHandler(errorHandler)

app.listen({ port: 3333, host: '0.0.0.0' }).then(() => {
    console.log("HTTP server running")
})


// Require the framework and instantiate it
const fastify = require("fastify")({ logger: true })

// Declare a route
fastify.route({
    method: 'GET',
    url: '/',
    schema: {
        // requests needs to have a querystring with a `name` parameter
        querystring: {
            name: { type: 'string' }
        },
        // the response needs to be an object with `hello` properties of type string
        response: {
            200: {
                type: 'object',
                properties: {
                    hello: { type: 'string' }
                }
            }
        }
    },
    prehandler: async (request, reply) => {
        // E.g. check authentication
    },
    handler: async (request, reply) => {
        return { hello: 'world' }
    }
})

// Run the server!
const start = async () => {
    try {
        await fastify.listen(3000)
    } catch (err) {
        fastify.log.error(err)
        process.exit(1)
    }
}
start()
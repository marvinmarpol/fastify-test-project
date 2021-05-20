// Require the framework and instantiate it
const fastify = require("fastify")({
    logger: {
        redact: ['req.headers.authorization'],
        level: 'trace',
        serializers: {
            req(request) {
                return {
                    method: request.method,
                    url: request.url,
                    headers: request.headers,
                    hostname: request.hostname,
                    remoteAddress: request.ip,
                    remotePort: request.socket.remotePort
                }
            }
        }
    }
})

// Declare a route
fastify.get('/', async (request, reply) => {
    return { hello: 'world' }
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
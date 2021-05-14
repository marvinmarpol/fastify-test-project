// Require the framework and instantiate it
const fastify = require("fastify")({
    /* https: {
        allowHTTP1: true,
        key: readFileSync('./fastify.key'),
        cert: readFileSync('./fastify.cert')
    }, */
    logger: { level: 'trace' },
    ignoreTrailingSlash: true,
    maxParamLength: 200,
    caseSensitive: true,
    //trustProxy: '127.0.0.1,192.168.1.1/24',
})
fastify.log.trace(fastify.initialConfig)

fastify.register(async (instance, opts) => {
    instance.get('/initial-config', async (request, reply) => {
        return instance.initialConfig
    })

    instance.get('/error', async (request, reply) => {
        // will throw an error because initialConfig is read-only
        // and can not be modified
        instance.initialConfig.https.allowHTTP1 = false
        return instance.initialConfig
    })
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
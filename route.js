async function routes(fastify, options) {
    const collection = fastify.mongo.db.collection('customers')

    fastify.get('/', async (request, reply) => {
        return { hello: 'world' }
    })

    fastify.get('/customers', async (request, reply) => {
        const result = await collection.find().toArray()
        if (result.length === 0) {
            throw new Error('No documents found')
        }
        return result
    })

    fastify.get('/customers/:name', async (request, reply) => {
        const result = await collection.findOne({ name: request.params.name })
        if (result === null) {
            throw new Error('Invalid value')
        }
        return result
    })

}

module.exports = routes
// https://www.fastify.io/docs/latest/Decorators/
// Require the framework and instantiate it
const fastify = require("fastify")({ logger: true })

// Decorate request with a 'user' property
fastify.decorateRequest('user', '')

// Update our property
fastify.addHook('preHandler', (req, reply, done) => {
  req.user = 'Marvin Mitchell'
  done()
})
// And finally access it
fastify.get('/', (req, reply) => {
  reply.send(`Hello, ${req.user}!`)
})

// Run the server!
const start = async()=>{
    try{
        await fastify.listen(3000)
    } catch(err){
        fastify.log.error(err)
        process.exit(1)
    }
}
start()
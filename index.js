// https://www.fastify.io/docs/latest/Fluent-Schema/

// require fluent schema
const S = require('fluent-json-schema')

// Require the framework and instantiate it
const fastify = require("fastify")({ logger: true })

const addressSchema = S.object()
  .id('#address')
  .prop('line1').required()
  .prop('line2')
  .prop('country').required()
  .prop('city').required()
  .prop('zipcode').required()

const commonSchemas = S.object()
  .id('https://fastify/demo')
  .definition('addressSchema', addressSchema)
  //.definition('otherSchema', otherSchema) // You can add any schemas you need

fastify.addSchema(commonSchemas)

const bodyJsonSchema = S.object()
  .prop('residence', S.ref('https://fastify/demo#address')).required()
  .prop('office', S.ref('https://fastify/demo#/definitions/addressSchema')).required()

const schema = { body: bodyJsonSchema }

// Declare routes
fastify.post('/the/url', { schema }, (request, reply) => {
    return { hello: 'world' }
})
fastify.get('/', async (request, reply) => {
    return { hello: 'world' }
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
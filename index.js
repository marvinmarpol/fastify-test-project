// https://www.fastify.io/docs/latest/Validation-and-Serialization/

// Require the framework and instantiate it
const fastify = require("fastify")({ logger: true })

const bodyJsonSchema = {
    type: 'object',
    required: ['requiredKey'],
    properties: {
      someKey: { type: 'string' },
      someOtherKey: { type: 'number' },
      requiredKey: {
        type: 'array',
        maxItems: 3,
        items: { type: 'integer' }
      },
      nullableKey: { type: ['number', 'null'] }, // or { type: 'number', nullable: true }
      multipleTypesKey: { type: ['boolean', 'number'] },
      multipleRestrictedTypesKey: {
        oneOf: [
          { type: 'string', maxLength: 5 },
          { type: 'number', minimum: 10 }
        ]
      },
      enumKey: {
        type: 'string',
        enum: ['John', 'Foo']
      },
      notTypeKey: {
        not: { type: 'array' }
      }
    }
  }
  
  const queryStringJsonSchema = {
    type: 'object',
    properties: {
      name: { type: 'string' },
      excitement: { type: 'integer' }
    }
  }
  
  const paramsJsonSchema = {
    type: 'object',
    properties: {
      par1: { type: 'string' },
      par2: { type: 'number' }
    }
  }
  
  const headersJsonSchema = {
    type: 'object',
    properties: {
      'x-foo': { type: 'string' }
    },
    required: ['x-foo']
  }
  
  const schema = {
    body: bodyJsonSchema,
    querystring: queryStringJsonSchema,
    params: paramsJsonSchema,
    headers: headersJsonSchema
  }
  


// Declare a route
fastify.get('/', async (request, reply) => {
    return { hello: 'world' }
})

fastify.post('/validation', { schema }, async(request, reply) =>{
    return { hello: 'sup' }
})

let handler = () => {}
fastify.post('/validation2', { schema }, handler)

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
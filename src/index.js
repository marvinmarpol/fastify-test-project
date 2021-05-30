// get the config variables
const config = require('./config');

// Import fastify framework and instantiate it
const fastify = require('fastify')({
    logger: true,
});

// Declare a route
fastify.get('/', async (request, reply) => {
    return { config };
});

// Registering routes
fastify.register(require('./modules/user/route'));

// Run the server
const start = async () => {
    try {
        await fastify.listen(config.app.port);
    } catch (err) {
        fastify.log.error(err);
        process.exit(1);
    }
};
start();
// get the config variables
const config = require('./config');

// Import fastify framework and instantiate it
const fastify = require('fastify')({
    logger: config.app.logger,
});

// Registering hooks
require('./hooks/request-hook')(fastify);

// Registering plugins
require('./plugins/core-plugin')(fastify);

// Registering routes
fastify.register(require('./modules/user/route'));

// Run the server
const start = async () => {
    try {
        await fastify.listen(config.app.port, '0.0.0.0');
    } catch (err) {
        fastify.log.error(err);
        process.exit(1);
    }
}
start();
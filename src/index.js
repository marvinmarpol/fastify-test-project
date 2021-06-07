// get the config variables
const config = require('./config');

// get monitoring such as sentry and newrelic
const sentry = require('./infrastructures/monitoring/sentry');
const newrelic = require('newrelic');

// Import fastify framework and instantiate it
const fastify = require('fastify')({
    logger: config.app.logger,
});

// Registering hooks
require('./hooks/request-hook')(fastify);

// Registering plugins
require('./plugins/fastify-core-plugin')(fastify);

// Registering decorators
require('./decorators/reply-decorator')(fastify);

// Registering routes
fastify.get('/', async () => {
    return config;
});
fastify.register(require('./modules/user/route'));

// Run the server
const start = async () => {
    try {
        await fastify.listen(config.app.port, config.app.host);
    } catch (err) {
        fastify.log.error(err);
        process.exit(1);
    }
}
start();
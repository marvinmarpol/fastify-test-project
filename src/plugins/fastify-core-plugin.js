// get the config variables
const config = require('../config');

module.exports = (fastify) => {
    fastify.register(require('fastify-swagger'), config.swagger);
}
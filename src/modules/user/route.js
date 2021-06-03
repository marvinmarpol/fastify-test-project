const controller = require('./controller');

module.exports = async (fastify) => {
    fastify.post('/user/:id', controller.checkUser);
}
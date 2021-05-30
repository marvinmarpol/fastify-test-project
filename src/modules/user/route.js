const controller = require('./controller');

module.exports = async (fastify) => {
    fastify.get('/user/:id', controller.checkUser);
};
const controller = require('./controller');
const auth = require('../auth/controller');
const dto = require('./dto');

module.exports = async (fastify) => {
    fastify.get('/user/:id', { preHandler: auth.basicAuthOnboarding }, controller.checkUser);
}
const usecase = require('./usecase');

const checkUser = async (request, reply) => {
    try {
        data = await usecase.checkUser(request.params.id);
    } catch (err) {
        reply.send(err);
    }
    reply.send(data);
}

module.exports = Object.freeze({
    checkUser
});
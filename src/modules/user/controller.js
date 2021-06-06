const usecase = require('./usecase');
const { StatusCodes } = require('http-status-codes');

const checkUser = async (request, reply) => {
    try {
        data = await usecase.checkUser(request.params.id);
    } catch (err) {
        reply.code(err.getHttpCode()).send(err);
    }
    if (!data) {
        reply.code(StatusCodes.NOT_FOUND);
    }
    reply.send(data);
}

module.exports = Object.freeze({
    checkUser
});
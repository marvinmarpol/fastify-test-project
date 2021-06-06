const usecase = require('./usecase');
const Sentry = require("@sentry/node");
const { StatusCodes } = require('http-status-codes');

const checkUser = async (request, reply) => {
    try {
        data = await usecase.checkUser(request.params.id);
        if (!data) {
            return reply.code(StatusCodes.NOT_FOUND).send(null);
        }
        reply.send(data);
    } catch (err) {
        Sentry.captureException(err)
        reply.code(err.getHttpCode()).send(err);
    }
}

module.exports = Object.freeze({
    checkUser
});
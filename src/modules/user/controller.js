const usecase = require('./usecase');
const Sentry = require("@sentry/node");
const { StatusCodes, ReasonPhrases, getReasonPhrase } = require('http-status-codes');

const checkUser = async (request, reply) => {
    try {
        data = await usecase.checkUser(request.params.id);
        if (!data) {
            return reply.sendResponse(StatusCodes.NOT_FOUND, ReasonPhrases.NOT_FOUND, null);
        }
        reply.sendResponse(StatusCodes.OK, ReasonPhrases.OK, data);
    } catch (err) {
        Sentry.captureException(err);
        reply.sendResponse(err.getHttpCode(), getReasonPhrase(err.getHttpCode()), err.message);
    }
}

module.exports = Object.freeze({
    checkUser
});
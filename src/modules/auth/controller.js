const usecase = require('./usecase');
const basicAuth = require('basic-auth');
const Sentry = require("@sentry/node");
const { StatusCodes, ReasonPhrases } = require('http-status-codes');

const basicAuthOnboarding = async (request, reply) => {
    let credentials = basicAuth(request);
    try {
        data = await usecase.basicAuthOnboarding(credentials);
        if (!data) {
            return reply.sendResponse(StatusCodes.UNAUTHORIZED, ReasonPhrases.UNAUTHORIZED, null);
        }
    } catch (err) {
        return reply.sendResponse(StatusCodes.UNAUTHORIZED, ReasonPhrases.UNAUTHORIZED, null);
    }
}

const basicAuthOnApp = async (request, reply) => {
    let credentials = basicAuth(request);
    try {
        data = await usecase.basicAuthOnApp(credentials);
        if (!data) {
            return reply.sendResponse(StatusCodes.UNAUTHORIZED, ReasonPhrases.UNAUTHORIZED, null);
        }
    } catch (err) {
        Sentry.captureException(err);
        return reply.sendResponse(StatusCodes.UNAUTHORIZED, ReasonPhrases.UNAUTHORIZED, null);
    }
}

module.exports = Object.freeze({
    basicAuthOnboarding,
    basicAuthOnApp,
});
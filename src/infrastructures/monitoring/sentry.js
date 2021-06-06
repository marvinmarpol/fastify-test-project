// get the config variables
const config = require('../../config');
const Sentry = require("@sentry/node");

Sentry.init({
    environment: config.app.nodeEnv,
    dsn: "https://fa6f72a7e7194d37a596fdaaff04ffae@o255829.ingest.sentry.io/5802547",

    // Set tracesSampleRate to 1.0 to capture 100%
    // of transactions for performance monitoring.
    // We recommend adjusting this value in production
    tracesSampleRate: 1.0,
});
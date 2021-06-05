// import required libraries
require('dotenv').config();
const version = require('../package.json').version;

// config constants
const DEPLOYMENT_LEVEL = {
    local: 'local',
    development: 'development',
    production: 'production',
};

// map deploytment level to log level
const LOG_LEVEL = {
    [DEPLOYMENT_LEVEL.local]: 'trace',
    [DEPLOYMENT_LEVEL.development]: 'info',
    [DEPLOYMENT_LEVEL.production]: 'error',
}

// init environment variables which used globaly in this module
let baseURL = process.env.BASE_URL || 'http://localhost';
let port = process.env.PORT || 3000;
let nodeEnv = process.env.NODE_ENV || DEPLOYMENT_LEVEL.local;

module.exports = {
    app: {
        baseURL,
        port,
        nodeEnv,
        logger: {
            level: LOG_LEVEL[nodeEnv] || 'trace',
            customLevels: {
                kios: 45,
            },
        },
        trustProxy: process.env.TRUST_PROXY || '127.0.0.1',
    },
    cors: {
        origin: true,
        methods: ['OPTIONS', 'GET', 'PUT', 'PATCH', 'POST', 'DELETE'],
        maxAge: 90,
    },
    hit: { max: 250, timeWindow: '1 minute' },
    mongodb: {
        connectionString: process.env.DB_URI || 'mongodb://localhost:27017/local?readPreference=primary&ssl=false',
        options: {
            useCreateIndex: true,
            useNewUrlParser: true,
            useFindAndModify: false,
            useUnifiedTopology: true,
        },
    },
    swagger: {
        routePrefix: '/docs',
        exposeRoute: nodeEnv === DEPLOYMENT_LEVEL.production ? false : true,
        swagger: {
            info: {
                title: 'API Documentation',
                description:
                    'This section describes the API Documentation',
                version,
            },
            host: `${baseURL}:${port}`,
            schemes: ['http', 'https'],
            consumes: ['application/json'],
            produces: ['application/json'],
        },
    },
};
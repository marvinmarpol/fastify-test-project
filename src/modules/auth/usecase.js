const config = require('../../config');
const repository = require('./repository');

const basicAuthOnboarding = async (credentials) => {
    let validAuth = (
        credentials.name == config.basicAuth.username && credentials.pass == config.basicAuth.password
    );
    return validAuth;
}

const basicAuthOnApp = async (credentials) => {
    return await repository.getUserByPlayerID({ _id: credentials.name, playerId: credentials.pass });
}

module.exports = Object.freeze({
    basicAuthOnboarding,
    basicAuthOnApp,
});
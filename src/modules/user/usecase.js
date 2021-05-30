const repository = require('./repository');

const checkUser = async (id) => {
    return await repository.getUserByID(id);
}

module.exports = Object.freeze({
    checkUser
});
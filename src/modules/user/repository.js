const db = require('../../infrastructures/database/mongodb');
const user = require('./entity');
const APIError = require('../../shared/errors/api-error');
const { ERROR_MESSAGE } = require('../../shared/constant');
const { StatusCodes } = require('http-status-codes');

getUserByID = async (id) => {
	try {
		await db.connect();
		return await db.findByID(user, id);
	} catch (err) {
		throw new APIError(`${ERROR_MESSAGE.dbConnectionFailed} ${err}`, StatusCodes.INTERNAL_SERVER_ERROR);
	}
}

module.exports = Object.freeze({
	getUserByID
});
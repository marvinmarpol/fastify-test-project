const db = require('../../infrastructures/database/mongodb');
const user = require('../user/entity');
const APIError = require('../../shared/errors/api-error');
const { ERROR_MESSAGE } = require('../../shared/constant');
const { StatusCodes } = require('http-status-codes');

getUserByPlayerID = async (query) => {
	try {
		await db.connect();
		return await db.findOne(user, query);
	} catch (err) {
		throw new APIError(`${ERROR_MESSAGE.dbConnectionFailed} ${err}`, StatusCodes.INTERNAL_SERVER_ERROR);
	}
}

module.exports = Object.freeze({
	getUserByPlayerID
});
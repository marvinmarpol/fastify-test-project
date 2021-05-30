const db = require('../../infrastructures/database/mongodb');
const user = require('./model');
const { ERROR_MESSAGE } = require('./constant');

getUserByID = async (id) => {
  try {
    await db.connect();
    return await db.findByID(user, id);
  } catch (err) {
    throw new Error(`${ERROR_MESSAGE.dbConnectionFailed} ${err}`);
  }
}

module.exports = Object.freeze({
  getUserByID
});
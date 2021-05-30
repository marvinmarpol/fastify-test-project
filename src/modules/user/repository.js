const mongodb = require('../../infrastructures/database/mongodb');

async function getUserByID(id) {
  db = await mongodb.connect();
}

module.exports = Object.freeze({
  getUserByID
});
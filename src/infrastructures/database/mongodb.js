// get the config variablesF
const config = require('../../config');

// import the required library
const mongoose = require('mongoose');

// import constants
const { DEFAULT_VALUE } = require('./constant')

// connect to mongodb
connect = async () => {
    if (mongoose.connection.readyState !== mongoose.STATES.connected) {
        return await mongoose.connect(config.mongodb.connectionString, config.mongodb.options);
    }
    return mongoose;
}

findAll = async (entity, limit = DEFAULT_VALUE.findLimit) => {
    return await entity.getMongooseModel().find({}).limit(limit);
}

findByID = async (entity, id) => {
    return await entity.getMongooseModel().findById(id);
}

findOne = async (entity, query) => {
    return await entity.getMongooseModel().findOne(query);
}

module.exports = Object.freeze({
    connect,
    findAll,
    findByID,
    findOne,
});
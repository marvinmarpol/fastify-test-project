// get the configuration
const config = require('../../config');

// import the required library
const mongoose = require('mongoose');
const { DEFAULT_VALUE } = require('./constant')

// connect to mongodb
connect = async () => {
    if (mongoose.connection.readyState !== mongoose.STATES.connected) {
        return await mongoose.connect(config.mongodb.connectionString, config.mongodb.options);
    }
    return mongoose;
}


findAll = async (model) => {
    return await model.schema.find({}).limit(DEFAULT_VALUE.findLimit);
}

findByID = async (model, id) => {
    return await model.schema.findById(id);
}

module.exports = Object.freeze({
    connect,
    findAll,
    findByID
});
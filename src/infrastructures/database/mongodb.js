// get the configuration
const { config } = require("../../config");

// import the required library
const mongoose = require("mongoose");

// connect to mongodb
async function connect() {
    if (!mongoose.connection.readyState == mongoose.ConnectionStates.connected) {
        return mongoose.connect(config.mongodb.connectionString, config.mongodb.options);
    }
}

findAll,
findByID,

module.exports = Object.freeze({
    connect
})
// import the required library
const mongoose = require('mongoose');

const entity = {
    isDeleted: {
        type: Boolean,
        default: false,
    },
    name: String,
    phoneNumber: String,
    email: String,
    createdAt: {
        type: Date,
        default: Date.now,
    },
    updatedAt: Date,
    deletedAt: Date,
}

getSchema = () => {
    return mongoose.model('user', new mongoose.Schema(entity));
}

// create cchema
module.exports = Object.freeze({
    getSchema,
})
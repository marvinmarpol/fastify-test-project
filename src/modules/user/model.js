// import the required library
const mongoose = require('mongoose');

const model = {
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

const schema = mongoose.model('user', new mongoose.Schema(model));

// create cchema
module.exports = {
    model,
    schema,
}
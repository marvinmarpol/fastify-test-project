// import the required library
const mongoose = require('mongoose');

// create cchema
module.exports = mongoose.model('user', new mongoose.Schema({
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
}));
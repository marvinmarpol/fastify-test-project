const repository = require('./repository');
const mongoose = require('mongoose');

// create default entity
const entity = {
    isDeleted: {
        type: Boolean,
        default: false,
    },
    name: String,
    phoneNumber: String,
    email: String,
    createdAt: Date,
    updatedAt: Date,
    deletedAt: Date,
}

// create default mongooseSchema
const mongooseSchema = mongoose.model('user', new mongoose.Schema(entity), 'users');
getMongooseSchema = () => {
    return mongooseSchema;
}

// create cchema
module.exports = Object.freeze({
    getMongooseSchema,
})
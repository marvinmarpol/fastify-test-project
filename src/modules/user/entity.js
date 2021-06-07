const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;

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
const mongooseSchema = new mongoose.Schema(entity);

// create default mongooseModel
const mongooseModel = mongoose.model('user', mongooseSchema, 'users');


getMongooseSchema = () => {
    return mongooseSchema;
}

getMongooseModel = () => {
    return mongooseModel;
}

// create cchema
module.exports = Object.freeze({
    getMongooseSchema,
    getMongooseModel,
})
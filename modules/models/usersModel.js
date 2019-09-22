const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const usersSchema = new Schema({
    first_name: {
        type: String,
        required: true
    },
    last_name: {
        type: String,
        required: true
    },
    birth_date: {
        type: Date,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    register_date: {
        type: Date,
        required: true
    },
    login: {
        type: String,
        required: true,
        unique: true
    },
    pass: {
        type: String,
        required: true
    },
    avatar: {
        type: String
    },
    friends: {
        type: [String]
    },
    role: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('users', usersSchema);
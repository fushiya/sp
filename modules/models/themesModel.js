const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const themesSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    content: {
        type: String
    },
    categoryId: {
        type: Schema.Types.ObjectId,
        ref: 'categories',
        required: true
    },
    create_userId: {
        type: Schema.Types.ObjectId,
        ref: 'users',
        required: true
    },
    create_date: {
        type: Date,
        required: true
    }
});

module.exports = mongoose.model('themes', themesSchema);
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const messengesSchema = new Schema({
    content: {
        type: String,
        required: true
    },
    themeId: {
        type: Schema.Types.ObjectId,
        ref: 'themes',
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

module.exports = mongoose.model('messenges', messengesSchema);
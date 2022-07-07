const mongoose = require('mongoose');

const contactSchema = mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    comment: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: false
    },
    contacted: {
        type: Boolean,
        required: false
    }
});

module.exports = mongoose.model('Contact', contactSchema);
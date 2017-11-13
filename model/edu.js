var mongoose = require('mongoose');

var EduSchema = new mongoose.Schema({
    schoolName: {
        type: String,
        required: true
    },
    degree: {
        type: String,
        required: true
    },
    subject: {
        type: Array,
        required: true
    },
    graduation: {
        type: String,
        required: true
    },
    eduId: {
        type: String,
        required: true
    },
});

Edu = mongoose.model('Edu', EduSchema);
module.exports = Edu;
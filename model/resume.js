var mongoose = require('mongoose');

var ResumeSchema = new mongoose.Schema({
    skills: {
        type: Array,
        required: true
    },
    experience: {
        type: Array,
        required: true
    },
    education: {
        type: Array,
        required: true
    }
});

ResumeSchema = mongoose.model('Resume', ResumeSchema);
module.exports = Resume;
var mongoose = require('mongoose');

var JobSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    organization: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    startDate: {
        type: String,
        required: true
    },
    endDate: {
        type: String,
        required: true
    },
    tech:{
        type: Array,
        required: true
    },
    jobId: {
        type: String,
        required: true,
        unique: true
    },
    position: {
        type: Number,
        required: true,
        unique: true
    }
});

Job = mongoose.model('Job', JobSchema);
module.exports = Job;
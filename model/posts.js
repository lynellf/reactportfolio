var mongoose = require('mongoose');

var PostSchema = new mongoose.Schema({
    title: {
        type: String,
        unique: true,
        required: true,
        trim: true
    },
    post: {
        type: String,
        required: true,
        trim: false,
        unique: false
    },
    date: {
        type: Date,
        required: true
    }, 
    postId: {
        type: Number,
        unique: true
    },
    tags: {
        type: Array,
        unique: false,
        required: false
    },
});

Posts = mongoose.model('Posts', PostSchema);
module.exports = Posts;
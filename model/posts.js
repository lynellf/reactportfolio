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
        type: String,
        required: true
    }, 
    postId: {
        type: String,
        unique: true
    },
    tags: {
        type: Array,
        unique: false,
        required: false
    },
    imgUrl: {
        type: String
    },
    lastUpdated: {
        type: String
    }

});

Posts = mongoose.model('Posts', PostSchema);
module.exports = Posts;
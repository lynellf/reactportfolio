var express = require('express');
var router = express.Router();
var Posts = require('../model/posts.js');
var path = require('path');
var fileName;

// Require multer for file uploading
var multer = require('multer');
// Storage configuration
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './client/public/uploads/')
  },
  filename: function (req, file, cb) {
    cb(null, fileName = Date.now() + path.extname(file.originalname))
    fileName 
    console.log(fileName)// Appending extension
  },
  
});

// Set file destination for uploads
var upload = multer({ storage: storage });

// Multer adds a body object and a file or files object to the request object. 
// The body object contains the values of the text fields of the form. 
// The file or files object contains the files uploaded via the form.

router.post('/upload', upload.single('photo'), function(req, res, next){
  // req.file is the 'photo' file
  // req.body will hold the text fields, if there were any
  // res.send(`/public/uploadds/${storage.filename}`)
  res.send(`/uploads/${fileName}`);
  
});

router.post('')

// POST/Blog Content
router.post('/submit', function (req, res) {
let postData = {
  title: req.body.title,
  post: req.body.post,
  date: req.body.date,
  postId: req.body.postId,
  tags: req.body.tags,
  imgUrl: req.body.imgUrl
};
Posts.create(postData, function(error, postData) {
  if (error) {
    console.log(error);
    console.log(req.body);
  } else {
    // console.log(postData);
    res.send(`Successfully posted ${postData.title} to database.`);
    return console.log(`Successfully posted ${postData.title} to database.`);
  }
}); 
});

// POST/Update Blog Content
router.post('/update/:postId', function (req, res) {
  let updateData = {
    title: req.body.title,
    post: req.body.post,
    lastUpdated: req.body.date,
    tags: req.body.tags,
    imgUrl: req.body.imgUrl
  };
  Posts.findOneAndUpdate({ postId: `${req.params.postId}`}, updateData, function (error, updateData) {
    if (error) {
      console.log(error);
      // console.log(req.body);
    } else {
      // console.log(updateData);
      res.send(`Successfully posted ${updateData.title} to database.`);
      return console.log(`Successfully posted ${updateData.title} to database.`);
    }
  });
});

// GET/Single Post
router.get('/post/:postId', function (req, res) {
  // console.log(req.params);
  Posts.findOne({ postId: `${req.params.postId}`}, function (err, docs) {
    if (!err) {
      let results = {
        "post": {}
      };
      results.post = docs;
      res.send(results);
      return (results);
    } else {
      console.log(err);
      return(err);
    }
  });
});

// GET/Delete Post
router.post('/rp', function (req, res) {
  // console.log(req.body.postId);
  let deletedPost = {
    postId: req.body.postId
  }
  Posts.findOneAndRemove({ postId: `${deletedPost.postId}` }, function (err, docs) {
    if (!err) {
      console.log(`Post Id: ${deletedPost.postID} has been deleted.`);
      res.send(`Post Id: ${deletedPost.postID} has been deleted.`);
      return (`Post Id: ${deletedPost.postID} has been deleted.`);
    } else {
      console.log(err);
      return (err);
    }
  });
});

// GET/All Posts
router.get('/posts', function(req, res) {
  Posts.find({}, function(err, docs){
    if (!err) {
      let results = {
        "posts": {}
      };
      results.posts = docs;
      // console.log(results);
      res.send(results);
      return(results);
    }
  });
});


module.exports = router;

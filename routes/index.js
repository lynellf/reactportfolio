var express = require('express');
var router = express.Router();
var User = require('../model/user.js');
var Posts = require('../model/posts.js');
var path = require('path');
var mid = require('../middleware/auth');

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

// POST/Register
router.post('/register', function (req, res) {
  if (
    req.body.userName &&
    req.body.password &&
    req.body.confirmPassword
  ) {
    // confirm user entered the same password twice
    if (req.body.password !== req.body.confirmPassword) {
      let err = new Error("Passwords don't match.");
      err.status = 400;
      return next(err);
    }
    // user info object
    const userData = {
      userName: req.body.userName,
      password: req.body.password
    };
    console.log(userData);
    // Collect registration form data and post to database
    User.create(userData, function (error, user) {
      if (error) {
        console.log(error);
        res.send("An Error Occured");
      } else {
        return res.redirect("http://localhost:3000");
      }
    });
  } else {
    let err = new Error("All fields are required.");
    err.status = 400;
    return next(err);
  }
});

// Get/Control Panel 
router.get("/controlpanel", mid.requiresLogin, function (req, res, next) {
  console.log(res)
  User.findById(req.session.userId)
    .exec(function (error, user) {
      if (error) {
        return next(error);
      } else {
        return res.send(true);
      }
    });
});

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

// Route for user sign-in
// POST/login
router.post('/login', function (req, res, next) {
  if (req.body.userName && req.body.password) {
    // console.log(req.body.userName);
    // console.log(req.body.password);
    User.authenticate(req.body.userName, req.body.password, function (error, user) {
      if (error || !user) {
        let err = new Error("Wrong username or password.");
        err.status = 401;
        return next(err);
      } else {
        req.session.userId = user._id;
        console.log("successful login")
        console.log(req.session);
        return res.redirect("http://localhost:3000");
      }
    });
  } else {
    let err = new Error("Username and password are required.");
    err.status = 401;
    return next(err);
  }
});

module.exports = router;

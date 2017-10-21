var express = require('express');
var router = express.Router();
var User = require('../model/user.js');

//POST/Register
router.post('/register', function (req, res) {
  if (
    req.body.userName &&
    req.body.password &&
    req.body.confirmPassword
  ) {
    //confirm user entered the same password twice
    if (req.body.password !== req.body.confirmPassword) {
      let err = new Error("Passwords don't match.");
      err.status = 400;
      return next(err);
    }
    //user info object
    const userData = {
      userName: req.body.userName,
      password: req.body.password
    };
    console.log(userData);
    //Collect registration form data and post to database
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

//Route for user sign-in
//POST/login
router.post('/login', function (req, res, next) {
  if (req.body.userName && req.body.password) {
    console.log(req.body.userName);
    console.log(req.body.password);
    User.authenticate(req.body.userName, req.body.password, function (error, user) {
      if (error || !user) {
        let err = new Error("Wrong username or password.");
        err.status = 401;
        return next(err);
      } else {
        req.session.userId = user._id;
        return res.redirect("http://localhost:3000");
      }
    });
  } else {
    let err = new Error("Username and password are required.");
    err.status = 401;
    return next(err);
  }
});


/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.json([{
//     id: 1,
//     username: "samsepi0l"
//   }, {
//     id: 2,
//     username: "D0loresH4ze"
//   }]);
// });

module.exports = router;

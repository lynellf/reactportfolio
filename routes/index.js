var express = require('express');
var router = express.Router();
var Posts = require('../model/posts.js');
var Job = require('../model/job.js');
var Skill = require('../model/skill.js');
var Edu = require('../model/edu.js');
var path = require('path');
var latest = Posts.find({ tags: 'Project' }).limit(6);
var fileName;

/////////////////////////////////////////////
/// File Uploads
/////////////////////////////////////////////
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

  router.post('');

/////////////////////////////////////////////
/// Blog Posts
/////////////////////////////////////////////
  // POST / New Blog Post
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

  // POST/ Update Blog Post 
  router.post('/update/:postId', function (req, res) {
    let updateData = {
      title: req.body.title,
      post: req.body.post,
      lastUpdated: req.body.date,
      tags: req.body.tags,
      imgUrl: req.body.imgUrl
    };
    Posts.findOneAndUpdate({ postId: `${req.params.postId}` }, updateData, function (error, updateData) {
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

  // GET/ Delete Blog Post
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

  // GET/ Single Blog Post
  router.get('/post/:postId', function (req, res) {
    // console.log(req.params);
    Posts.findOne({ postId: `${req.params.postId}` }, function (err, docs) {
      if (!err) {
        let results = {
          "post": {}
        };
        results.post = docs;
        res.send(results);
        return (results);
      } else {
        console.log(err);
        return (err);
      }
    });
  });

  // GET/ All Blog Posts
  router.get('/posts', function (req, res) {
    Posts.find({}, function (err, docs) {
      if (!err) {
        let results = {
          "posts": {}
        };
        results.posts = docs;
        // console.log(results);
        res.send(results);
        return (results);
      }
    });
  });

  // GET/ All Blog Posts with Project Tag
  router.get('/portfolio', function (req, res) {
    Posts.find({ tags: `Project` }, function (err, docs) {
      if (!err) {
        let results = {
          "posts": {}
        };
        results.posts = docs;
        // console.log(results);
        res.send(results);
        return (results);
      }
    });
  });

  // GET/ Most Recent Projects
  router.get('/latest', function (req, res) {
    Posts.find(latest, function (err, docs) {
      if (!err) {
        let results = {
          "posts": {}
        };
        results.posts = docs;
        // console.log(results);
        res.send(results);
        return (results);
      }
    });
  });

  // GET/ All Blog Posts with Book Tag
  router.get('/books', function (req, res) {
    Posts.find({ tags: `Books` }, function (err, docs) {
      if (!err) {
        let results = {
          "posts": {}
        };
        results.posts = docs;
        // console.log(results);
        res.send(results);
        return (results);
      }
    });
  });

  // GET/ All Blog Posts with Blog Tag
  router.get('/blog', function (req, res) {
    Posts.find({ tags: `Blog` }, function (err, docs) {
      if (!err) {
        let results = {
          "posts": {}
        };
        results.posts = docs;
        // console.log(results);
        res.send(results);
        return (results);
      }
    });
  });

/////////////////////////////////////////////
/// Jobs 
/////////////////////////////////////////////
  // POST/job (Create or Update)
  router.post('/submitjob', function (req, res) {
    let jobData = {
      title: req.body.title,
      organization: req.body.organization,
      location: req.body.location,
      description: req.body.description,
      startDate: req.body.startDate,
      endDate: req.body.endDate,
      tech: req.body.tech,
      jobId: req.body.jobId,
      position: req.body.position
    };
    Job.create(jobData, function(error, jobData) {
      if (error) {
        console.log(error);
        console.log(req.body);
      } else {
        // console.log(jobData);
        res.send(`Successfully posted job to database.`);
        return console.log(`Successfully posted job to database.`);
      }
    }); 
    });

  // GET/ Delete Job Post
  router.post('/deletejob', function (req, res) {
    // console.log(req.body.jobId);
    let deletedJob = {
      jobId: req.body.jobId
    }
    Job.findOneAndRemove({ jobId: `${deletedJob.jobId}` }, function (err, docs) {
      if (!err) {
        console.log(`job Id: ${deletedJob.jobID} has been deleted.`);
        res.send(`job Id: ${deletedJob.jobID} has been deleted.`);
        return (`job Id: ${deletedJob.jobID} has been deleted.`);
      } else {
        console.log(err);
        return (err);
      }
    });
  });

    // GET/ Single Job Post
    router.get('/job/:jobId', function (req, res) {
      // console.log(req.params);
      Job.findOne( { jobId: `${req.params.jobId}` } , function (err, docs) {
        if (!err) {
          let results = {
            "job": {}
          };
          results.job = docs;
          res.send(results);
          return (results);
        } else {
          console.log(err);
          return(err);
        }
    });
  });

    // GET/ All Job Posts
    router.get('/jobs', function (req, res) {
      Job.find({}, function (err, docs) {
        if (!err) {
          let results = {
            "jobs": {}
          };
          results.jobs = docs;
          // console.log(results);
          res.send(results);
          return (results);
        }
      });
    });

/////////////////////////////////////////////
/// Skills 
///////////////////////////////////////////// 
  // POST/ Create New Skill
  router.post('/submitskill', function (req, res) {
    let skillData = {
      skill: req.body.skill,
      years: req.body.years,
      skillId: req.body.skillId
    };
    Skill.create(skillData, function (error, skillData) {
      if (error) {
        console.log(error);
        console.log(req.body);
      } else {
        // console.log(skillData);
        res.send(`Successfully posted skill to database.`);
        return console.log(`Successfully posted skill to database.`);
      }
    });
  });

  // Post/ Delete Skill
  router.post('/deleteskill', function (req, res) {
    // console.log(req.body.skillId);
    let deletedSkill = {
      skillId: req.body.skillId
    }
    Skill.findOneAndRemove({ skillId: `${deletedSkill.skillId}` }, function (err, docs) {
      if (!err) {
        console.log(`skill Id: ${deletedSkill.skillID} has been deleted.`);
        res.send(`skill Id: ${deletedSkill.skillID} has been deleted.`);
        return (`skill Id: ${deletedSkill.skillID} has been deleted.`);
      } else {
        console.log(err);
        return (err);
      }
    });
  });

  // GET/ Single Skill
  router.get('/skills/:skillId', function (req, res) {
    // console.log(req.params);
    Skill.findOne({ skillId: `${req.params.skillId}` }, function (err, docs) {
      if (!err) {
        let results = {
          "skill": {}
        };
        results.skill = docs;
        res.send(results);
        return (results);
      } else {
        console.log(err);
        return (err);
      }
    });
  });

  // GET/ All Skills
  router.get('/skills', function (req, res) {
    Skill.find({}, function (err, docs) {
      if (!err) {
        let results = {
          "skills": {}
        };
        results.skills = docs;
        // console.log(results);
        res.send(results);
        return (results);
      }
    });
  });

/////////////////////////////////////////////
/// Education
/////////////////////////////////////////////
  // POST/ Create New School
  router.post('/submitedu', function (req, res) {
    let eduData = {
      schoolName: req.body.schoolName,
      degree: req.body.degree,
      subject: req.body.subject,
      graduation: req.body.graduation,
      eduId: req.body.eduId
    };
    Edu.create(eduData, function (error, eduData) {
      if (error) {
        console.log(error);
        console.log(req.body);
      } else {
        // console.log(eduData);
        res.send(`Successfully posted school to database.`);
        return console.log(`Successfully posted school to database.`);
      }
    });
  });

  // Post/ Delete School
  router.post('/deleteschool', function (req, res) {
    // console.log(req.body.eduId);
    let deletedEdu = {
      eduId: req.body.eduId
    }
    edu.findOneAndRemove({ eduId: `${deletedEdu.eduId}` }, function (err, docs) {
      if (!err) {
        console.log(`edu Id: ${deletedEdu.eduId} has been deleted.`);
        res.send(`edu Id: ${deletedEdu.eduId} has been deleted.`);
        return (`edu Id: ${deletedEdu.eduId} has been deleted.`);
      } else {
        console.log(err);
        return (err);
      }
    });
  });

  // GET/ Single School
  router.get('/edu/:eduId', function (req, res) {
    // console.log(req.params);
    Edu.findOne({ eduId: `${req.params.eduId}` }, function (err, docs) {
      if (!err) {
        let results = {
          "edu": {}
        };
        results.edu = docs;
        res.send(results);
        return (results);
      } else {
        console.log(err);
        return (err);
      }
    });
  });

  // GET/ All Education
  router.get('/edu', function (req, res) {
    Edu.find({}, function (err, docs) {
      if (!err) {
        let results = {
          "edus": {}
        };
        results.edus = docs;
        // console.log(results);
        res.send(results);
        return (results);
      }
    });
  });



module.exports = router;

var mongoose = require('mongoose');
var bcrypt = require('bcrypt');

var UserSchema = new mongoose.Schema({
    userName: {
        type: String,
        unique: true,
        required: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
        trim: false,
        unique: false
    }
});

// authenticate input against database documents
UserSchema.statics.authenticate = function (userName, password, callback) {
    User.findOne({ userName: userName })
        .exec(function (error, user) {
            console.log(user);
            if (error) {
                return callback(error);
            } else if (!user) {
                let err = new Error('User not found.');
                err.status = 401;
                return callback(err);
            }
            bcrypt.compare(password, user.password, function (error, result) {
                if (result === true) {
                    return callback(null, user);
                } else {
                    return callback();
                }
            })
        });
}

// hash password before saving to database
UserSchema.pre('save', function (next) {
    let user = this;
    bcrypt.hash(user.password, 10, function (err, hash) {
        if (err) {
            return next(err);
        }
        user.password = hash;
        next();
    })
});
User = mongoose.model('User', UserSchema);
module.exports = User;
function loggedOut(req, res, next) {
    if (req.session && req.session.userId) {
        return res.redirect('/profile');
    }
    return next();
}
function requiresLogin(req, res, next) {
    if (req.session && req.session.userId) {
        return next();
    } else {
        var err = new Error('You must be logged in to view this page.');
        err.status = 401;
        res.render('index.pug', {
            title: "Home", home: "nav-item nav-link active",
            app: "nav-item nav-link", about: "nav-item nav-link",
            profile: "nav-item nav-link", register: "nav-item nav-link",
            login: "nav-item nav-link"
        });
    }
}
module.exports.loggedOut = loggedOut;
module.exports.requiresLogin = requiresLogin;

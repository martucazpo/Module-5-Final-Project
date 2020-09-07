const router = require('express').Router();
const passport = require('passport');
const moment = require('moment');
const User = require('../../../models/User');
const { ensureAuthenticated } = require('../../../passport/auth');

router.post('/login', ensureAuthenticated, (req, res, next) => {
    passport.authenticate('local', function (err, user, info) {
        if (err) {
            return next(err);
        }
        if (!user) {
            let message = info.message;
            let id = user.id;
            User.findById({ _id: id}).populate('exercises').exec((err, data) => {
                if (err) {
                    console.log(err);
                } else {
                    let name = data.name;
                    let id = data._id;
                    let exercises = data.exercises;
                    let showLog = "hidden";
                    let showErrs = "hidden";
                    return res.render('layouts/site/user-landing.ejs', { name, id, exercises, moment, showLog, showErrs, message });
                }
            });
        }
        req.logIn(user, function (err) {
            if (err) {
                return next(err);
            }
            return res.redirect('/admin/adminLanding/landing');
        });
    })(req, res, next);
});

module.exports = router;
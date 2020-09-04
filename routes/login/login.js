const router = require('express').Router();
const passport = require('passport');


router.post('/sign-in', function (req, res, next) {
    let regAction = "/auth/register/form";
    let logAction = "/auth/login/sign-in";
    let showLogin = "display";
    let showRegistration = "hidden";
    let showErrs = "display";
    passport.authenticate('local', function (err, user, info) {
        if (err) {
            return next(err);
        }
        if (!user) {
            let message = info.message;
            return res.render('layouts/site/initial-landing', {
                message,
                regAction,
                logAction,
                showLogin,
                showRegistration,
                showErrs
            });
        }
        req.logIn(user, function (err) {
            if (err) {
                return next(err);
            }
            return res.redirect('/landing/user-landing');
        });
    })(req, res, next);
});


module.exports = router;
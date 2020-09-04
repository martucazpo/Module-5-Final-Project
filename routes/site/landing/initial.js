const router = require('express').Router();

router.get('/', (req, res) => {
    let regAction = "/auth/register/form";
    let logAction = "/auth/login/sign-in";
    let showLogin = "hidden";
    let showRegistration = "hidden";
    let showErrs = "hidden";
    res.render('layouts/site/initial-landing.ejs', { showErrs, logAction, regAction, showLogin, showRegistration });
});

module.exports = router;
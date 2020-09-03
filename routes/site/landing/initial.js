const router = require('express').Router();

router.get('/', (req, res) => {
    let regAction = "/auth/register/form";
    let showLogin = "hidden";
    let showRegistration = "hidden";
    res.render('layouts/site/initial-landing.ejs', { regAction, showLogin, showRegistration });
});

module.exports = router;
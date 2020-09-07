const router = require('express').Router();

router.get('/landing', (req, res) => {
    res.render('layouts/site/admin-landing.ejs');
});

module.exports = router;
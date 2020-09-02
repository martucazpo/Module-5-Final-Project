const router = require('express').Router();

router.get('/', (req, res) => {
    res.render('layouts/site/initial-landing.ejs');
});

module.exports = router;
const router = require('express').Router();
const siteRoutes = require('./site/index');
const signInRoutes = require('./login/index');

router.use('/', siteRoutes);
router.use('/auth', signInRoutes);

module.exports = router;
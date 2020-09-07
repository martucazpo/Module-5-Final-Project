const router = require('express').Router();
const siteRoutes = require('./site/index');
const signInRoutes = require('./login/index');
const adminRoutes = require('./site/admin');

router.use('/', siteRoutes);
router.use('/auth', signInRoutes);
router.use('/admin', adminRoutes);

module.exports = router;
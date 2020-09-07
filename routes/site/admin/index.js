const router = require('express').Router();
const adminLoginRoutes = require('./adminLogin');
const adminLandingRoutes = require('./adminLanding');

router.use('/adminArea', adminLoginRoutes);
router.use('/adminLanding', adminLandingRoutes);


module.exports = router;
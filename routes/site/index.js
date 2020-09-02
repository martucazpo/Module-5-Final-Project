const router = require('express').Router();
const landingRoutes = require('./landing');

router.use('/', landingRoutes);


module.exports = router;
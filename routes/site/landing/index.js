const router = require('express').Router();
const initialRoute = require('./initial');
const userRoutes = require('./userLanding');

router.use('/', initialRoute);
router.use('/landing', userRoutes);

module.exports = router;
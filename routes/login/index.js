const router = require('express').Router();
const loginRoutes = require('./login');
const registrationRoutes = require('./register');

router.use('/login', loginRoutes);
router.use('/register', registrationRoutes);


module.exports = router;
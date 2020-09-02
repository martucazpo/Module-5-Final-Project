const router = require('express').Router();
const initialRoute = require('./initial');

router.use('/', initialRoute);

module.exports = router;
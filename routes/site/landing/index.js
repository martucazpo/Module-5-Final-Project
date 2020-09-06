const router = require('express').Router();
const initialRoute = require('./initial');
const userRoutes = require('./userLanding');
const updateExerciseRoutes = require('./exerciseUpdate');

router.use('/', initialRoute);
router.use('/landing', userRoutes);
router.use('/exerciseUpdate', updateExerciseRoutes);

module.exports = router;
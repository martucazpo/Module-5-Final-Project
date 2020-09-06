const router = require('express').Router();
const User = require('../../../models/User');
const Exercise = require('../../../models/Exercise');
const moment = require('moment');
const {
    ensureAuthenticated
} = require('../../../passport/auth');

router.post('/:id', ensureAuthenticated, (req, res) => {
    let exerciseId = req.params.id;
    let type = req.body.type;
    console.log(type);
    let duration = req.body.duration;
    let quantity = req.body.quantity;
    Exercise.findByIdAndUpdate({
        _id: exerciseId
    }, {
        $set: {
            type,
            duration,
            quantity
        }
    }, {
        new: true
    }, (err, data) => {
        if (err) {
            console.log(err);
        } else {
            let userId = data.userId;
            User.findById({
                _id: userId
            }).populate('exercises').exec((err, data) => {
                if (err) {
                    console.log(err);
                } else {
                    let id = data._id;
                    let name = data.name;
                    let exercises = data.exercises;
                    let showLog = "display";
                    res.render('layouts/site/user-landing.ejs', {
                        name,
                        id,
                        exercises,
                        moment,
                        showLog
                    });
                }
            });
        }
    });
});

router.get('/exercise-delete/:id', (req, res) => {
    let exerciseId = req.params.id;
    Exercise.findByIdAndRemove({
        _id: exerciseId
    }, (err, data) => {
        if (err) {
            console.log(err);
        } else {
            let userId = data.userId;
            let exerciseId = data._id;
            User.findByIdAndUpdate({
                _id: userId
            }, {
                $pull: {
                    exercises: exerciseId
                }
            }, {
                new: true
            }, (err, data) => {
                if (err) {
                    console.log(err);
                } else {
                    let userId = data._id;
                    User.findById({
                        _id: userId
                    }).populate('exercises').exec((err, data) => {
                        if (err) {
                            console.log(err);
                        } else {
                            let id = data._id;
                            let name = data.name;
                            let exercises = data.exercises;
                            let showLog = "display";
                            res.render('layouts/site/user-landing.ejs', {
                                name,
                                id,
                                exercises,
                                moment,
                                showLog
                            });
                        }
                    });
                }
            });
        }
    });
});

module.exports = router;
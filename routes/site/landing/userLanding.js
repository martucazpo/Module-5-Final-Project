const router = require('express').Router();
const User = require('../../../models/User');
const Exercise = require('../../../models/Exercise');
const moment = require('moment');
const { ensureAuthenticated } = require('../../../passport/auth');


router.get('/user-landing', ensureAuthenticated, (req, res) => {
    id = req.user.id;
    User.findById({ _id: id}).populate('exercises').exec((err, data) => {
        if (err) {
            console.log(err);
        } else {
            let name = data.name;
            let id = data._id;
            let exercises = data.exercises;
            let showLog = "hidden";
            res.render('layouts/site/user-landing.ejs', { name, id, exercises, moment, showLog });
        }
    });
});

router.post('/user-exercises/:id', ensureAuthenticated, (req, res) => {
    let userId = req.params.id;
    let type = req.body.exercise;
    let quantity = req.body.quantity;
    let duration = req.body.duration;
    let exercise = new Exercise({ userId, type, quantity, duration });
    exercise.save((err, data) => {
        if (err) {
            console.log(err);
        } else {
            let userId = data.userId;
            let exerciseId = data._id;
            User.findByIdAndUpdate({ _id: userId },{ $push: {exercises: exerciseId}},{upsert: true, new:true}, (err, data) => {
                if (err) {
                    console.log(err);
                } else {
                    let userId = data._id;
                    User.findById({ _id: userId}).populate('exercises').exec((err, data) => {
                        if (err) {
                            console.log(err);
                        } else {
                            let id = data._id;
                            let name = data.name;
                            let exercises = data.exercises;
                            let showLog = "hidden";
                            res.render('layouts/site/user-landing.ejs', {name, id, exercises, moment, showLog });
                        }
                    });
                }
            });
        }
    });
});

module.exports = router;
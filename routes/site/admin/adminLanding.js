const router = require('express').Router();
const moment = require('moment');
const User = require('../../../models/User');

router.get('/landing', (req, res) => {
    User.find({
        _id: {
            $ne: "5f559c8ec14b545a3c860d9b"
        }
    }, (err, data) => {
        if (err) {
            console.log(err);
        } else {
            let showLog = "hidden";
            let users = data;
            let exerciseModal = "no";
            res.render('layouts/site/admin-landing.ejs', {
                showLog,
                users,
                moment,
                exerciseModal
            });
        }
    });
});

router.get('/exercise-log/:id', (req, res) => {
    let id = req.params.id;
    User.findById({
        _id: id
    }).populate('exercises').exec((err, data) => {
        if (err) {
            console.log(err);
        } else {
            let name = data.name;
            let id = data._id;
            let exercises = data.exercises;
            User.find({
                _id: {
                    $ne: "5f559c8ec14b545a3c860d9b"
                }
            }, (err, data) => {
                if (err) {
                    console.log(err);
                } else {
                    let users = data;
                    let showLog = "display";
                    let showErrs = "hidden";
                    let exerciseModal = "yes";
                    res.render('layouts/site/admin-landing.ejs', {
                        users,
                        name,
                        id,
                        exercises,
                        moment,
                        showLog,
                        showErrs,
                        exerciseModal
                    });
                }
            });
        }
    });
});


module.exports = router;
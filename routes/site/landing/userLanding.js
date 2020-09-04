const router = require('express').Router();
const User = require('../../../models/User');
const { ensureAuthenticated } = require('../../../passport/auth');


router.get('/user-landing', ensureAuthenticated, (req, res) => {
    id = req.user.id;
    User.findById({ _id: id }, (err, data) => {
        if (err) {
            console.log(err);
        } else {
            let name = data.name;
            let id = data._id;
            let date = data.timestamp;
            res.render('layouts/site/user-landing.ejs', { name, id, date });
        }
    });
});

module.exports = router;
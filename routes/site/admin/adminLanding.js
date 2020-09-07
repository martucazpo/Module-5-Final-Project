const router = require('express').Router();
const moment = require('moment');
const User = require('../../../models/User');

router.get('/landing', (req, res) => {
    User.find( { _id: { $ne: "5f559c8ec14b545a3c860d9b" } }, (err, data) => {
        if (err) {
            console.log(err);
        } else {
            let users = data;
            res.render('layouts/site/admin-landing.ejs', { users, moment });
        }
    });  
});

module.exports = router;
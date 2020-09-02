const router = require('express').Router();
const User = require('../../models/User');

router.get('/test', (req, res) => {
    let name = 'Test';
    let email = 'mail@test.com';
    let password = 'password';
    User.findOne({ name: name }, (err, data) => {
        if (err) {
            console.log(err);
        } else if (data) {
            let name = data.name;
            let email = data.email;
            let password = data.password;
            res.render('layouts/site/test.ejs', { name, email, password });
        } else if (!data) {
            let user = new User({ name, email, password });
            user.save((err, data) => {
                if (err) {
                    console.log(err);
                } else {
                    let name = data.name;
                    let email = data.email;
                    let password = data.password;
                    res.render('layouts/site/test.ejs', { name, email, password });
                }
            });
        }
    });
});

module.exports = router;
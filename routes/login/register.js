const router = require('express').Router();
const bcrypt = require('bcryptjs');
const User = require('../../models/User');

router.post('/form', (req, res) => {
    let email = req.body.email;
    let errors = [];
    User.findOne({ email: email }, async (err, data) => {
        if (err) {
            console.log(err);
        } else if (data) {
            let regAction = "/auth/register/form";
            let logAction = "/auth/login/sign-in";
            let showRegistration = "display";
            let showLogin ="hidden";
            let showErrs = "display";
            errors.push({ message: "This email is already registered in our database" });
            res.render('layouts/site/initial-landing.ejs', { errors, showErrs, logAction, regAction,  showRegistration, showLogin });
        } else if (! data) {
            let regAction = "/auth/register/form";
            let logAction = "/auth/login/sign-in";
            let password1 = req.body.password1;
            let password2 = req.body.password2;
            if (password1 !== password2){
                let showRegistration = "display";
                let showLogin = "hidden";
                let showErrs = "display";
                errors.push({ message: "Passwords do not match, please re-submit" });
                res.render('layouts/site/initial-landing.ejs', { logAction, regAction, errors, showErrs, showRegistration, showLogin });
            } else if (password1 === password2){
                let name = req.body.name;
                let salt = await bcrypt.genSalt(10);
                let password = await bcrypt.hash(password1, salt);
                let user = new User({ name, email, password });
                user.save((err, data) => {
                    if (err) {
                        console.log (err);
                    } else {
                        let name = data.name;
                        let id = data._id;
                        let date = data.timestamp;
                        res.render('layouts/site/user-landing.ejs', { name, id, date });
                    }
                });
            }
        }
    }); 
});

module.exports = router;
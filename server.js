if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
  }
  
  const express = require('express');
  const app = express();
  const mongoose = require('mongoose');
  //const flash = require('connect-flash');
  const session = require('express-session');
  const passport = require('passport');
  const expressLayouts = require('express-ejs-layouts');
  const routes = require('./routes/index');
  const PORT = process.env.PORT;
  const SECRET = process.env.SECRET;
  
  require('./passport/passport')(passport);
  
  app.set('view engine', 'ejs');
  app.set('views', __dirname + '/views');
  app.set('layout', 'layouts/main');
  
  app.use(session({
    secret: SECRET,
    resave: true,
    saveUninitialized: true
  }));
  app.use(passport.initialize());
  app.use(passport.session());
  //app.use(flash());

// app.use(function (req, res, next) {
//   res.locals.error = req.flash('error');
//   res.locals.success = req.flash('success');
//   next();
// });
  
  app.use(express.urlencoded({
    extended: false
  }));
  app.use(express.json());
  app.use(express.static('public'));
  app.use(expressLayouts);
  app.use(routes);
  
  mongoose.connect(process.env.DATABASE_URI || process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true
    },
    () => {
      console.log('The mon(goose) is on the loose');
    });
  
  app.listen(PORT, () => {
    console.log("Tiny electronic ears always listen on port " + PORT);
  });
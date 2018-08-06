const router = require('express').Router();
const User      = require ('../models/User'); 
const passport  = require('passport');
const Department = require('../models/Department')


function isAuthenticated(req, res, next){
     if(req.isAuthenticated()){
         return next()
    }else{
        res.json({message: "Usuario sin autorización"});
    }
}

function isLogguedIn(req,res,next){
    if(req.isAuthenticated()){
        res.redirect('/profile');
    }else{
        next();
    }
}

//loginFacebook ESTRATEGIA PASSPORT
router.get('/facebook', passportFacebook.authenticate('facebook'));

router.get('/facebook/callback',
  passportFacebook.authenticate('facebook', { failureRedirect: '/' }),
  function(req, res) {
    // Successful authentication, redirect home.
    res.redirect('/profile');
  });

router.get('/login', isAuth, (req, res, next) => {
  res.render('auth/login');
});

router.post('/login', passport.authenticate('local'), (req, res, next) => {
  res.redirect('/');
});


module.exports = router;
const router        = require('express').Router();
const User          = require('../models/User');
const passport      = require ('passport')
const Department    = require('../models/Department')

//multer
const multer = require('multer');
const uploads = multer({dest: './public/images'});

router.post("/user/signup", (req, res, next) => {
    User.register(req.body, req.body.password)
      .then(user => {
        res.status(200).json(user);
      })
      .catch(e => next(e));
        status(404).json(e)
   });


router.post('/user/login', passport.authenticate('local'), (req,res,next)=>{
    req.app.locals.user = req.user
    res.json(req.user)
});
   
router.get('/logout', (req, res, next)=>{
    req.logout();
    req.session.destroy(()=>{
        res.redirect('/login');
    });
});

//get profile
router.get('/user/profile/:id', (req, res, next)=>{
    User.findById(req.params.id)
    .then(user=>{
        res.status(200).json(user)
    })
    .catch(err=>{
        res.status(404).json(err)
    })
})

//edit profile
router.put('/user/profile/:id', uploads.single('image'), (req, res, next)=>{
    if(req.file) req.body.image = '/images/' + req.file.filename
    User.findById(req.params.id)
    .then(user=>{
        res.status(200).json(user)
    })
    .catch(err=>{
        res.status(404).json(err)
    })
})

module.exports = router;

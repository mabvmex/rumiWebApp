const router        = require('express').Router();
const User          = require('../models/User');
const passport      = require ('passport')
const Department    = require('../models/Department')

router.post("/signup", (req, res, next) => {
    User.register(req.body)
      .then(user => {
        res.status(200).json(user);
      })
      .catch(e => next(e));
        status(404).json(e)
   });

router.post('/login', passport.authenticate('local'), (req,res,next)=>{
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
router.get('/user/:id', (req, res, next)=>{
    User.findById(req.params.id)
    .then(user=>{
        res.status(200).json(user)
    })
    .catch(err=>{
        res.status(404).json(err)
    })
})

//edit profile
router.put('/user/:id', (req, res, next)=>{
    User.findById(req.params.id)
    .then(user=>{
        res.status(200).json(user)
    })
    .catch(err=>{
        res.status(404).json(err)
    })
})


// router.post('/', (req, res, next)=>{
//     //req.body['owner'] = req.user._id
//     // Department.create(req.body)
//         .then(dep=>{
//             return res.status(200).json(dep)
//         }).catch(err=>{
//             return res.status(503).json(err)
//         })
// })

module.exports = router;


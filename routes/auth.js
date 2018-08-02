const express = require('express');
const router   = express.Router();
// const User = ('../models/User'); 
// const passport = require('passport');
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

router.get('/profile', isAuthenticated,(req, res)=>{
    Department//.find()
        .then(depas=>res.json(depas))
            // res.status(202).json(departments)  })
        .catch(err=>next(e))//{
            // res.status(404).json(err)
        });

module.exports = router;


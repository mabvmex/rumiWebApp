const express       = require('express');
const Department    = require('../models/Department')
const router        = express.Router();
// const User = ('../models/User');

//multer
const multer = require('multer');
const uploads = multer({dest: './public/images'});


// post new dep
router.post('/user/departments', uploads.single('image'), (req, res, next)=>{
    if(req.file) req.body.imgage = '/images/' + req.file.file
    Department.create(req.body)
        .then(dep=>{
            return res.status(200).json(dep)
        }).catch(err=>{
            return res.status(503).json(err)
        });
});

//get one dep
router.get('/user/departments/:id', (req, res)=>{
    Department.findById(req.params.id)
    .then(depa => {
        if (!depa) return res.status(404)
        return res.status(200).json(depa);
    }) .catch(err => {
        return res.status(500).json(err);
    });
});

// edit new dep
router.put('/user/departments/edit/:id', uploads.single('image'), (req, res, next)=>{
    if(req.file) req.body.image = '/images/' + req.file.filename
    Department.findByIdAndUpdate(req.params.id, req.body, {new:true})
    .then(dep=>{
        return res.status(200).json(dep)
    }).catch(err=>{
        return res.status(503).json(err)
    });
});

// delete
router.delete('/user/departments/delete/:id', (req, res, next)=>{
    Department.findOneAndRemove(req.params.id)
    .then(dep=>{
        res.status(200).json(dep)
    }).catch(err=>{
        res.status(500).json(err)
        next(err)
    })
})

module.exports = router;


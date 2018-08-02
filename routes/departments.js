const express       = require('express');
const Department    = require('../models/Department')
const router        = express.Router();
// const User = ('../models/User');

//multer
const multer = require('multer');
const uploads = multer({dest: './public/images'});


// post new dep
router.post('/departments', uploads.single('image'), (req, res, next)=>{
    if(req.file) req.body.imgage = '/images/' + req.file.file
    // req.body['owner'] = req.user._id
    Department.create(req.body)
        .then(dep=>{
            return res.status(200).json(dep)
        }).catch(err=>{
            return res.status(503).json(err)
        });
});

//get one dep
router.get('/departments/:id', (req, res)=>{
    Department.findById(req.params.id)
    .then(depa => {
        if (!depa) return res.status(404)
        return res.status(200).json(depa);
    }) .catch(err => {
        return res.status(500).json(err);
    });
});

// edit new dep
router.put('/departments/edit/:id', (req, res, next)=>{
    Department.findByIdAndUpdate(req.params.id, req.body, {new:true})
    .then(dep=>{
        return res.status(200).json(dep)
    }).catch(err=>{
        return res.status(503).json(err)
    });
});

// delete
router.delete('/departments/delete/:id', (req, res, next)=>{
    Department.findOneAndRemove(req.params.id)
    .then(dep=>{
        res.status(200).json(dep)
    }).catch(err=>{
        res.status(500).json(err)
        next(err)
    })
})

module.exports = router;


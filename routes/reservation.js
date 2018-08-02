const express       = require('express');
const Reservacion    = require('../models/Booking')
const router        = express.Router();
// const User = ('../models/User');

//get dep
router.get('/', (req, res)=>{
    Reservacion.find()
    .then(booking => {
        return res.status(200).json(booking);
    }).catch(e => next(e))
});

//get one dep
router.get('/booking', (req, res)=>{
    Department.findById(req.params.id)
    .then(depa => {
        if (!depa) return res.status(404)
        return res.status(200).json(depa);
    }) .catch(err => {
        return res.status(500).json(err);
    });
});

// post new dep
router.post('/departments',  (req, res, next)=>{
    Reservacion.create(req.body)
        .then(dep=>{
            return res.status(200).json(dep)
        }).catch(err=>{
            return res.status(503).json(err)
        });
});

// edit new dep
router.put('/departments/:id', (req, res, next)=>{
    Department.findByIdAndUpdate(req.params.id, req.body, {new:true})
    .then(dep=>{
        return res.status(200).json(dep)
    }).catch(err=>{
        return res.status(503).json(err)
    });
});

    // delete
    router.delete('/departments/:id', (req, res, next)=>{
        Department.findOneAndRemove(req.body.params.id)
        .then(dep=>{
            res.status(200).json(dep)
        }).catch(err=>{
            res.status(500).json(err)
            next(err)
        })
})

module.exports = router;

//revisar rutas

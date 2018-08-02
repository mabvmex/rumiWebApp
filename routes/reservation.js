const express       = require('express');
const Reservation    = require('../models/Booking')
const router        = express.Router();
// const User = ('../models/User');


// post new reserv NO MUESTRA EL BODY QUE LE ENVIO
router.post('/booking/new',  (req, res, next)=>{
    Reservation.create(req.body)
        .then(reserv=>{
            return res.status(200).json(reserv)
        }).catch(err=>{
            return res.status(503).json(err)
        });
});

//get one reserv FUNCIONA
router.get('/booking/:id', (req, res)=>{
    Reservation.findById(req.params.id)
    .then(reserv => {
        if (!reserv) return res.status(404)
        return res.status(200).json(reserv);
    }) .catch(err => {
        return res.status(500).json(err);
    });
});

// edit reserv FUNCIONA
router.put('/booking/edit/:id', (req, res, next)=>{
    Reservation.findByIdAndUpdate(req.params.id, req.body, {new:true})
    .then(reserv=>{
        return res.status(200).json(reserv)
    }).catch(err=>{
        return res.status(503).json(err)
    });
});

// delete reserv 
router.delete('/booking/delete/:id', (req, res, next)=>{
    Reservation.findOneAndRemove(req.params.id)
    .then(reserv=>{
        res.status(200).json(reserv)
    }).catch(err=>{
        res.status(500).json(err)
        next(err)
    })
})

module.exports = router;

//revisar rutas

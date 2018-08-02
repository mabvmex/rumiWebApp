const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const departmentSchema = new Schema({

    // owner: {        
    //     type: Schema.Types.ObjectId,
    //     ref: "User",
        //required: [true, 'The owner name can\'t be empty']
    //},
    price: Number,
    description: String,
    available: {
        type:Boolean,
        default:true
    },
    departmentPhotos: {
        type: Array,
        photos: [],
        default: 'https://images.unsplash.com/photo-1502672023488-70e25813eb80?ixlib=rb-0.3.5&s=c157aeb34ae7815e38e71180c132a569'
    },
    location: {
        type: {
            type: String,
            default: 'Point'
        },
        address: String,
        coordinates: [{ type:Number }],
    }, 
    guests:[{
        type: Schema.Types.ObjectId,
        ref: "User"
    }],
    review: [{
        type: Schema.Types.ObjectId,
        ref: "Review"
}],
    booking: [{
        type: Schema.Types.ObjectId,
        ref: "Booking"
}]
},{
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at"
    }
});

module.exports = mongoose.model('Departments', departmentSchema)

    // payment: {   //paymentMetod: String, //(efectivo, tarjeta de credito, dropdawnMenu)
    //     type: String,
    //     enum: ["Credit Card", "cash"],
    //     default: "Cash"
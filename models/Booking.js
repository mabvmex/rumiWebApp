const mongoose = require('mongoose');
const Schema = require('mongoose').Schema;

const bookingSchema = new Schema({
    // date1 = new Date,
    // date2 = new Date,

       user: [{
        type: Schema.Types.ObjectId,
        ref: "User"
}], 
    department: [{
        type: Schema.Types.ObjectId,
        ref: "Departament"
}],
    price: [{
        type: Schema.Types.ObjectId,
        ref: "Department"
}],
    owner: [{
        type: Schema.Types.ObjectId,
        ref: "Departament"
}],
    
},{
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at"
    }
});

module.exports = require('mongoose').model('Booking', bookingSchema);

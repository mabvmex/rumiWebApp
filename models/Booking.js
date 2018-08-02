const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookingSchema = new Schema({ 
    
        
        price: Number,
        description: String,
        

    
},{
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at"
    }
  }
);

module.exports = mongoose.model('Booking', bookingSchema);


// // date1 = new Date,
//     // date2 = new Date,
//     user: String,
//     description: String,
    
    
// //     user: [{
// //         type: Schema.Types.ObjectId,
// //         ref: "User"
// // }], 
// //     department: [{
// //         type: Schema.Types.ObjectId,
// //         ref: "Departament"
// // }],
// //     price: [{
// //         type: Schema.Types.ObjectId,
// //         ref: "Department"
// // }],
// //     owner: [{
// //         type: Schema.Types.ObjectId,
// //         ref: "Departament"
// // }],
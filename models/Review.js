const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
    title: String,
    comment: String,
    
    user: [{
        type: Schema.Types.ObjectId,
        ref: "User"
}], 
    department: [{
        type: Schema.Types.ObjectId,
        ref: "Departament"
}],
    booking: [{
        type: Schema.Types.ObjectId,
        ref: "Booking"
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

module.exports = mongoose.model('Review', reviewSchema);


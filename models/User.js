const Schema = require("mongoose").Schema;
const passportLocalMongoose = require("passport-local-mongoose");
const userSchema = new require("mongoose").Schema({

    username: {
        type: String,
        required: [true, 'The username can\'t be empty']
    },
    userPhone: {
        type: Number,
        required: [true, 'The user phone can\'t be empty']
    },
    email: String,
    photoURL: {
        type: String,
        default: 'https://cdn2.iconfinder.com/data/icons/snipicons/5000/home-512.png' //BACKGROUND
        },
    department: [{
            type: Schema.Types.ObjectId,
            ref: "Department"
    }],
    review: [{
            type: Schema.Types.ObjectId,
            ref: "Review"
    }],
    booking: [{
        type: Schema.Types.ObjectId,
        ref: "Booking"
    }],

  },{
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at"
    }
  });

userSchema.plugin(passportLocalMongoose, { usernameField: "email" });
module.exports = require("mongoose").model("User", userSchema);

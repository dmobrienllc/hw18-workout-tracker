const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: {
        type: String,
        require: true,
        unique: true
    },
    workouts: [
        {
            type: Schema.Types.ObjectId,
            ref: "Workout"
        }
    ]
});

const User = mongoose.model("User",UserSchema);

module.exports = User;


// const UserSchema = new Schema({
//     username: {
//       type: String,
//       trim: true,
//       required: "Username is Required"
//     },
  
//     password: {
//       type: String,
//       trim: true,
//       required: "Password is Required",
//       validate: [({ length }) => length >= 6, "Password should be longer."]
//     },
  
//     email: {
//       type: String,
//       unique: true,
//       match: [/.+@.+\..+/, "Please enter a valid e-mail address"]
//     },
  
//     userCreated: {
//       type: Date,
//       default: Date.now
//     }
//   });









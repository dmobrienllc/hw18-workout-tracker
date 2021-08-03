const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    day: {
        type: Date,
        required: true,
        default: Date.now
    },
    exercises: [
        {
            type: Schema.Types.ObjectId,
            ref: "Exercise"
        }
    ]
});

const Workout = mongoose.model("Workout",WorkoutSchema);

module.exports = Workout;
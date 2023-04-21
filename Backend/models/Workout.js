const mongoose = require("mongoose");


//creating schema
const workoutSchema = new mongoose.Schema({
    title:
    {
        type: String,
        required: true
    },
    reps:
    {
        type: Number,
        required: true
    },
    loads:
    {
        type: Number,
        required: true
    }
}, { timestamps: true }); //store along with timestamps



//creating model
module.exports = mongoose.model("WorkOut", workoutSchema);
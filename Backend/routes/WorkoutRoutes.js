const express = require("express");
const Workout = require("../models/Workout");
const { createWorkout, getWorkouts, getWorkout,deleteworkout ,updateWorkout} = require("../controllers/WorkOutController")
const router = express.Router();


//get all workouts
router.get("/", getWorkouts)


//post a workout
router.post("/", createWorkout)


//get single workout based on id
router.get("/:id", getWorkout)

//deleting single workout
router.delete("/:id", deleteworkout)


//updating particular workout
router.patch("/:id",updateWorkout)


module.exports = router;
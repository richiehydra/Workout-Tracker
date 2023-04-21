const express = require("express");
const mongoose = require("mongoose");
const workoutRouter = require("./routes/WorkoutRoutes");

require("dotenv").config();

//to create api
const app = express();


//middlewares
app.use(express.json());


//connection to database
mongoose.connect(process.env.MONGO_URL).then(() => {
    console.log("Connection SuccesFull to the database");
}).catch((err) => {
    console.log(err)
})

//routers
app.use("/api/workouts", workoutRouter)


app.listen(process.env.PORT, () => {
    console.log(`The port is Running at ${process.env.PORT}!`);
})


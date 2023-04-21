import React from 'react'
import { useState, useEffect } from 'react'
import WorkoutDetails from './WorkoutDetails'
import Workout from './Workout'

function Home() {
    const [workouts, setworkout] = useState(null)
    useEffect(() => {
        const fetchdata = async () => {
            //fetching from api
            const response = await fetch('/api/workouts');
            const data = await response.json();
            if (response.ok) {
                //setting value
                setworkout(data)
            }
        }
        fetchdata();
    }, [])


    return (
        <div className='home'>
            <div className='workouts'>
                {workouts && workouts.map((work) => (
                    //render data
                    <WorkoutDetails key={work._id} work={work} />
                ))}
            </div>
            {/* Workout Form */}
            <Workout/>
        </div>
    )
}

export default Home
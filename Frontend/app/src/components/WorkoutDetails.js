import React from 'react'
import formatDistanceToNow from "date-fns/formatDistanceToNow"
function WorkoutDetails({ work }) {

    const handle = async () => {

        const response = await fetch('/api/workouts/' + work._id,
            {
                method: 'DELETE'
            })

        const res = response.json();

        if (response.ok) {
            alert("Workout Deleted SuccesFully");
        }
        else {
            alert("Workout Not Deleted");

        }

    }



    return (
        <div className="workout-details">
            <h1>{work.title}</h1>
            <p>
                <strong>ID:</strong> {work._id}
            </p>
            <p>
                <strong>Load (kg):</strong> {work.loads}
            </p>
            <p>
                <strong>Reps: </strong>
                {work.reps}
            </p>

            <p><strong>Time: </strong>{formatDistanceToNow(new Date(work.createdAt),{addSuffix:true})}</p>

            <button className='btn' onClick={handle}>Delete Workout</button>
        </div>
    )
}

export default WorkoutDetails
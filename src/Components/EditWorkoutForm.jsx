import React, { useState, useContext, useEffect } from 'react';
import { WorkoutContext } from '../context/WorkoutContext';
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"



const EditWorkoutForm = () => {
  const { state, dispatch } = useContext(WorkoutContext);
  const [name, setName] = useState('');

  useEffect(() => {
    if (state.editingWorkoutId !== null) {
      const workoutToEdit = state.workouts.find(
        (workout) => workout.id === state.editingWorkoutId
      );
      setName(workoutToEdit.name);
    }
  }, [state.editingWorkoutId, state.workouts]);


};

export default EditWorkoutForm;

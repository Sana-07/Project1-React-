import React from 'react';
import './App.css'
import { WorkoutProvider } from './context/WorkoutContext';
import WorkoutForm from './Components/WorkoutForm';
import WorkoutList from './Components/WorkoutList';
import EditWorkoutForm from './Components/EditWorkoutForm';


function App() {
  return (
    <WorkoutProvider>
      <div className="App">
        <h1 style={{ color: 'white' }}>Todo App for Daily Workout</h1>
        <WorkoutForm />
        <WorkoutList />
        <EditWorkoutForm/>
      </div>
    </WorkoutProvider>
  );
}

export default App;

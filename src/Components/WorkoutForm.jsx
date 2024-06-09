import React, { useState, useContext } from 'react';
import { WorkoutContext } from '../context/WorkoutContext';
 import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"
 import "../App.css"

const WorkoutForm = () => {
  const { dispatch } = useContext(WorkoutContext);
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim() !== '') {
      dispatch({
        type: 'ADD_WORKOUT',
        payload: { name, done: false },
      });
      setName('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter workout name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default WorkoutForm;

import React, { useState, useContext } from 'react';
import { WorkoutContext } from '../context/WorkoutContext';
import { FaEdit, FaTrashAlt, FaSave } from 'react-icons/fa';
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../App.css";

const WorkoutList = () => {
  const { state, dispatch } = useContext(WorkoutContext);
  const [editingId, setEditingId] = useState(null);
  const [editedName, setEditedName] = useState('');

  const handleDelete = (id) => {
    dispatch({ type: 'DELETE_WORKOUT', payload: id });
  };

  const handleToggle = (id) => {
    dispatch({ type: 'TOGGLE_WORKOUT', payload: id });
  };

  const handleEdit = (id, name) => {
    setEditingId(id);
    setEditedName(name);
  };

  const handleSave = (id) => {
    dispatch({
      type: 'UPDATE_WORKOUT',
      payload: { id, name: editedName }
    });
    setEditingId(null);
    setEditedName('');
  };

  const handleToggleEdit = (id) => {
    if (editingId === id) {
      setEditingId(null); 
      setEditedName(''); 
    } else {
      handleEdit(id, state.workouts.find(workout => workout.id === id).name);
    }
  };

  const handleClearAll = () => {
    dispatch({ type: 'CLEAR_ALL_WORKOUTS' });
  };

  return (
    <div>
      <ul>
        {state.workouts.map((workout) => (
          <li key={workout.id}>
            <input
              type="checkbox"
              checked={workout.done}
              onChange={() => handleToggle(workout.id)}
            />
            {editingId === workout.id ? (
              <>
                <input
                  type="text"
                  value={editedName}
                  onChange={(e) => setEditedName(e.target.value)}
                />
                <button onClick={() => handleSave(workout.id)} className="button" >
                  <FaSave />
                </button>
              </>
            ) : (
              <>
                <span>{workout.name}</span>
                <button onClick={() => handleToggleEdit(workout.id)} className="button">
                  <FaEdit />
                </button>
              </>
            )}
            <button onClick={() => handleDelete(workout.id)} className="button">
              <FaTrashAlt />
            </button>
          </li>
        ))}
      </ul>
      <button onClick={handleClearAll} className="Button">Clear All Workouts</button>
    </div>
  );
};

export default WorkoutList;


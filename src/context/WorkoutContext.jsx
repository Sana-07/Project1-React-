import React, { createContext, useReducer, useEffect } from 'react';
import "../App.css";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";

const initialState = {
  workouts: [],
  editingWorkoutId: null,
};

export const WorkoutContext = createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_WORKOUT':
      return {
        ...state,
        workouts: [...state.workouts, { ...action.payload, id: Date.now() }],
      };
    case 'DELETE_WORKOUT':
      return {
        ...state,
        workouts: state.workouts.filter((workout) => workout.id !== action.payload),
      };
    case 'TOGGLE_WORKOUT':
      return {
        ...state,
        workouts: state.workouts.map((workout) =>
          workout.id === action.payload ? { ...workout, done: !workout.done } : workout
        ),
      };
    case 'UPDATE_WORKOUT':
      return {
        ...state,
        workouts: state.workouts.map((workout) =>
          workout.id === action.payload.id ? { ...workout, name: action.payload.name } : workout
        ),
      };
    case 'CLEAR_ALL_WORKOUTS':
      return {
        ...state,
        workouts: [],
      };
    case 'SET_EDITING_WORKOUT':
      return {
        ...state,
        editingWorkoutId: action.payload,
      };
    case 'SET_WORKOUTS':
      return {
        ...state,
        workouts: action.payload,
      };
    default:
      return state;
  }
};

export const WorkoutProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const storedWorkouts = JSON.parse(localStorage.getItem('workouts'));
    if (storedWorkouts) {
      dispatch({ type: 'SET_WORKOUTS', payload: storedWorkouts });
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('workouts', JSON.stringify(state.workouts));
  }, [state.workouts]);

  return (
    <WorkoutContext.Provider value={{ state, dispatch }}>
      {children}
    </WorkoutContext.Provider>
  );
};

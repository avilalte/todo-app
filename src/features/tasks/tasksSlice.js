import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: 1, title: "Another task", description: "", completed: false },
  { id: 2, title: "Sample task", description: "Sample description", completed: true },
];

const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, { payload }) => {
      state.unshift(payload)
    },
    deleteTask: (state, action) => {
      return state.filter((task) => task.id !== action.payload);
    },
    editTask: (state, action) => {
      const index = state.findIndex((task) => task.id === action.payload.id);
      state[index]= {...state[index], ...action.payload.taskEdit};
    },
    toggleComplete: (state, action) => {
      const index = state.findIndex((task) => task.id === action.payload);
      state[index].completed = !state[index].completed;
    },
  },
});

export const { addTask, deleteTask, editTask, toggleComplete } =
  tasksSlice.actions;
export default tasksSlice.reducer;

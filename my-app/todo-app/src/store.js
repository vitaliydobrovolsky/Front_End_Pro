import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice"; // Ваші редюсери

const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

export default store;
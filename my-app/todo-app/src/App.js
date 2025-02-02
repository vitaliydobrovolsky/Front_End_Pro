import React from "react";
import { Provider, useDispatch, useSelector } from "react-redux";
import { configureStore, createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: 0,
  reducers: {
    increment: (state) => state + 1,
    decrement: (state) => state - 1,
  },
});

const { increment, decrement } = counterSlice.actions;

const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
  },
});


const Counter = () => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Value: {count}</h1>
      <div className="flex gap-2">
        <button
          className="px-4 py-2 bg-gray-200 rounded shadow"
          onClick={() => dispatch(increment())}
        >
          +
        </button>
        <button
          className="px-4 py-2 bg-gray-200 rounded shadow"
          onClick={() => dispatch(decrement())}
        >
          -
        </button>
      </div>
    </div>
  );
};


const App = () => (
  <Provider store={store}>
    <Counter />
  </Provider>
);

export default App;

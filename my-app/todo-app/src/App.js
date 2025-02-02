import React from "react";
import { Provider, useDispatch, useSelector } from "react-redux";
import { configureStore, createSlice } from "@reduxjs/toolkit";
import { useState } from "react";


const todoSlice = createSlice({
  name: "todos",
  initialState: [],
  reducers: {
    addTodo: (state, action) => {
      state.push({ id: Date.now(), text: action.payload });
    },
  },
});

const { actions, reducer } = todoSlice;
const store = configureStore({ reducer: { todos: reducer } });


const TodoForm = () => {
  const dispatch = useDispatch();
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      dispatch(actions.addTodo(input));
      setInput("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 flex gap-2">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="border p-2 w-full rounded"
        placeholder="Введите новую задачу"
      />
      <button type="submit" className="bg-gray-200 border px-4 py-2 rounded">
        Добавить
      </button>
    </form>
  );
};


const TodoList = () => {
  const todos = useSelector((state) => state.todos);
  return (
    <div className="p-4">
      <h2 className="text-lg font-bold mb-2">TODOS</h2>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id} className="border p-2 my-2 rounded bg-beige">
            {todo.text}
          </li>
        ))}
      </ul>
      <footer className="mt-4">Всего: {todos.length}</footer>
    </div>
  );
};


const App = () => {
  return (
    <Provider store={store}>
      <div className="max-w-md mx-auto mt-10 p-4 bg-cyan-300 border rounded shadow">
        <h1 className="text-2xl font-bold mb-4">TODO</h1>
        <TodoForm />
        <TodoList />
      </div>
    </Provider>
  );
};

export default App;

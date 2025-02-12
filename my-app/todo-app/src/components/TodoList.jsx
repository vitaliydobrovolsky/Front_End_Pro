import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, fetchTodos, deleteTodo, toggleTodo, editTodo, clearTodos } from "./todoSlice";

const TodoList = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos.items);
  const [newTodo, setNewTodo] = useState("");
  const [editId, setEditId] = useState(null);
  const [editText, setEditText] = useState("");

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  const handleAdd = () => {
    if (newTodo.trim()) {
      dispatch(addTodo(newTodo));
      setNewTodo("");
    }
  };

  const handleEdit = (id, text) => {
    setEditId(id);
    setEditText(text);
  };

  const handleSaveEdit = () => {
    if (editText.trim()) {
      dispatch(editTodo({ id: editId, text: editText }));
      setEditId(null);
      setEditText("");
    }
  };

  return (
    <div>
      <h1>Todo List</h1>
      <input value={newTodo} onChange={(e) => setNewTodo(e.target.value)} placeholder="New task" />
      <button onClick={handleAdd}>Add</button>
      <button onClick={() => dispatch(clearTodos())}>Clear All</button>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {editId === todo.id ? (
              <>
                <input value={editText} onChange={(e) => setEditText(e.target.value)} />
                <button onClick={handleSaveEdit}>Save</button>
              </>
            ) : (
              <>
                <span style={{ textDecoration: todo.completed ? "line-through" : "none" }}>
                  {todo.text}
                </span>
                <button onClick={() => dispatch(toggleTodo(todo.id))}>
                  {todo.completed ? "Undo" : "Complete"}
                </button>
                <button onClick={() => handleEdit(todo.id, todo.text)}>Edit</button>
                <button onClick={() => dispatch(deleteTodo(todo.id))}>Delete</button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { 
    addTodoRequest, 
    fetchTodosRequest, 
    removeTodo, 
    toggleTodo, 
    editTodo, 
    clearTodos 
} from "../store/todoSlice";

const TodoList = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos.items);
  const [newTodo, setNewTodo] = useState("");
  const [editId, setEditId] = useState(null);
  const [editText, setEditText] = useState("");

  useEffect(() => {
    dispatch(fetchTodosRequest()); 
  }, [dispatch]);

  const handleAdd = () => {
    if (newTodo.trim()) {
      dispatch(addTodoRequest({ text: newTodo }));
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
    <div style={{ maxWidth: "400px", margin: "20px auto", textAlign: "center" }}>
      <h1>Todo List</h1>
      <div style={{ display: "flex", gap: "10px", marginBottom: "10px" }}>
        <input
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="New task"
          style={{ flex: 1, padding: "5px" }}
        />
        <button onClick={handleAdd}>Add</button>
        <button onClick={() => dispatch(clearTodos())}>Clear All</button>
      </div>

      {todos.length > 0 ? (
        <ul style={{ listStyle: "none", padding: 0 }}>
          {todos.map((todo) => (
            <li
              key={todo.id}
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "5px",
                padding: "5px",
                border: "1px solid #ccc",
                borderRadius: "5px",
                backgroundColor: "#f9f9f9",
              }}
            >
              {editId === todo.id ? (
                <>
                  <input
                    value={editText}
                    onChange={(e) => setEditText(e.target.value)}
                    style={{ flex: 1 }}
                  />
                  <button onClick={handleSaveEdit}>Save</button>
                </>
              ) : (
                <>
                  <span
                    style={{ 
                      textDecoration: todo.completed ? "line-through" : "none", 
                      flex: 1, 
                      textAlign: "left",
                      paddingLeft: "5px"
                    }}
                  >
                    {todo.text}
                  </span>
                  <div style={{ display: "flex", gap: "5px" }}>
                    <button onClick={() => dispatch(toggleTodo(todo.id))}>
                      {todo.completed ? "Undo" : "Complete"}
                    </button>
                    <button onClick={() => handleEdit(todo.id, todo.text)}>Edit</button>
                    <button onClick={() => dispatch(removeTodo(todo.id))}>Delete</button>
                  </div>
                </>
              )}
            </li>
          ))}
        </ul>
      ) : (
        <p>No tasks available</p>
      )}
    </div>
  );
};

export default TodoList;

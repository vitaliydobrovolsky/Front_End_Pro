import React, { useState } from "react";

import { Form as FinalForm, Field } from "react-final-form";
import { Formik, Form as FormikForm, Field as FormikField, ErrorMessage } from "formik";
import "./index.css";

export default function TodoApp() {
  return (
    <div className="todo-container">
      <h1>TODO</h1>
      <ControlledTodo />
      <hr />
      <h1>TODO (React-final-form)</h1>
      <FinalFormTodo />
      <hr />
      <h1>TODO (Formik)</h1>
      <FormikTodo />
    </div>
  );
}


function ControlledTodo() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  const addTodo = () => {
    if (input.length >= 5) {
      setTodos([...todos, input]);
      setInput("");
    } else {
      alert("Введіть не менше 5 символів");
    }
  };

  const removeTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  return (
    <div className="todo-section">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Введіть завдання"
      />
      <button onClick={addTodo}>Додати</button>
      <div className="todos">
        {todos.map((todo, index) => (
          <div key={index} className="todo-item">
            <input type="checkbox" /> {todo}
            <button onClick={() => removeTodo(index)}>Видалити</button>
          </div>
        ))}
      </div>
    </div>
  );
}


function FinalFormTodo() {
  const [todos, setTodos] = useState([]);

  const onSubmit = (values) => {
    setTodos([...todos, values.todo]);
  };
  
  const validate = (values) => {
    const errors = {};
    if (!values.todo || values.todo.length < 5) {
      errors.todo = "Введіть не менше 5 символів";
    }

    const validate = (values) => {
      const errors = {};
      if (!values.todo || values.todo.length < 5) {
        errors.todo = "Введіть не менше 5 символів";
      }
      return errors;
    };

  const removeTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  return (
    <div className="todo-section">
      <Form
        onSubmit={onSubmit}
        validate={validate}
        render={({ handleSubmit, form, submitting, pristine, errors }) => (
          <form onSubmit={handleSubmit}>
            <Field name="todo">
              {({ input, meta }) => (
                <div>
                  <input {...input} placeholder="Введіть завдання" />
                  {meta.error && meta.touched && <span>{meta.error}</span>}
                </div>
              )}
            </Field>
            <button type="submit" disabled={submitting || pristine}>
              Додати
            </button>
          </form>
        )}
      />
      <div className="todos">
        {todos.map((todo, index) => (
          <div key={index} className="todo-item">
            <input type="checkbox" /> {todo}
            <button onClick={() => setTodos(todos.filter((_, i) => i !== index))}>
              Видалити
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}


function FormikTodo() {
  const [todos, setTodos] = useState([]);

  const validate = (values) => {
    const errors = {};
    if (!values.todo || values.todo.length < 5) {
      errors.todo = "Введіть не менше 5 символів";
    }
    return errors;
  };

  const removeTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  return (
    <div className="todo-section">
      <Formik
        initialValues={{ todo: "" }}
        validate={validate}
        onSubmit={(values, { resetForm }) => {
          setTodos([...todos, values.todo]);
          resetForm();
        }}
      >
        {() => (
          <Form>
            <Field name="todo" placeholder="Введіть завдання" />
            <button type="submit">Додати</button>
            <ErrorMessage name="todo" component="div" className="error" />
          </Form>
        )}
      </Formik>
      <div className="todos">
        {todos.map((todo, index) => (
          <div key={index} className="todo-item">
            <input type="checkbox" /> {todo}
            <button onClick={() => removeTodo(index)}>Видалити</button>
          </div>
        ))}
      </div>
    </div>
  );
}
}


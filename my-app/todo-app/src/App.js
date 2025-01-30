import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import "./App.css";

const validate = (values) => {
  const errors = {};
  if (!values.task) {
    errors.task = "Обов'язкове поле";
  } else if (values.task.length < 5) {
    errors.task = "Мінімальна довжина - 5 символів";
  }
  return errors;
};

const TodoList = () => {
  const [tasks, setTasks] = useState([]);

  return (
    <div className="todo-container">
      <h2>TODO List</h2>
      <Formik
        initialValues={{ task: "" }}
        validate={validate}
        onSubmit={(values, { resetForm }) => {
          setTasks([...tasks, values.task]);
          resetForm();
        }}
      >
        {({ isSubmitting }) => (
          <Form className="todo-form">
            <Field type="text" name="task" placeholder="Введіть задачу" />
            <ErrorMessage name="task" component="div" className="error" />
            <button type="submit" disabled={isSubmitting}>Додати</button>
          </Form>
        )}
      </Formik>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;

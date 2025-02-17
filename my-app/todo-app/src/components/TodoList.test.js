import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import TodoList from "../components/TodoList";
import { addTodoRequest } from "../store/todoSlice";

const mockStore = configureStore([]);

describe("TodoList Component", () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      todos: { items: [] }, // Імітуємо порожній список задач
    });

    store.dispatch = jest.fn(); // Замінюємо dispatch на тестову функцію
  });

  test("1️⃣ Заголовок сторінки - TODO List", () => {
    render(
      <Provider store={store}>
        <TodoList />
      </Provider>
    );

    expect(screen.getByText(/Todo List/i)).toBeInTheDocument();
  });

  test("2️⃣ У поле можна вводити цифри та букви", () => {
    render(
      <Provider store={store}>
        <TodoList />
      </Provider>
    );

    const input = screen.getByPlaceholderText("New task");

    fireEvent.change(input, { target: { value: "Test123" } });

    expect(input.value).toBe("Test123");
  });

  test("3️⃣ Кнопка 'Add' без тексту не додає задачу", () => {
    render(
      <Provider store={store}>
        <TodoList />
      </Provider>
    );

    const addButton = screen.getByText("Add");

    fireEvent.click(addButton);

    expect(store.dispatch).not.toHaveBeenCalledWith(
      addTodoRequest(expect.anything())
    );
  });

  test("4️⃣ Додавання нового елемента у список", () => {
    render(
      <Provider store={store}>
        <TodoList />
      </Provider>
    );

    const input = screen.getByPlaceholderText("New task");
    const addButton = screen.getByText("Add");

    fireEvent.change(input, { target: { value: "Buy milk" } });
    fireEvent.click(addButton);

    expect(store.dispatch).toHaveBeenCalledWith(
      addTodoRequest({ text: "Buy milk" })
    );
  }); })
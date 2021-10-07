import React, { useState, useRef } from "react";

const StoreContext = React.createContext();

const StoreProvider = (props) => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      todo: "Grocery Shopping",
    },
    {
      id: 2,
      todo: "Homework",
    },
    {
      id: 3,
      todo: "Shower",
    },
  ]);

  const [input, setInput] = useState();

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <StoreContext.Provider
      value={{ todos, setTodos, deleteTodo, input, setInput }}
    >
      {props.children}
    </StoreContext.Provider>
  );
};

export { StoreContext, StoreProvider };

import React, { useState } from "react";

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

  return (
    <StoreContext.Provider value={{ todos, setTodos }}>
      {props.children}
    </StoreContext.Provider>
  );
};

export { StoreContext, StoreProvider };

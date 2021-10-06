import Input from "./input";
import Button from "./button";
import { useContext } from "react";
import { StoreContext } from "../stores/store";

const Form = () => {
  const { todos, setTodos } = useContext(StoreContext);
  const addTodo = (event) => {
    event.preventDefault();
    setTodos([...todos, { id: todos.length, todo: "Test" }]);
  };
  return (
    <>
      <form onSubmit={addTodo}>
        <div className="flex flex-row justify-center items-center">
          <Input />
          <Button />
        </div>
      </form>
    </>
  );
};

export default Form;

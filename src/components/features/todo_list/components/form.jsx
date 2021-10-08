import Input from "./input";
import Button from "./button";
import { useContext } from "react";
import { StoreContext } from "../stores/store";

const Form = () => {
  const { todos, setTodos, input, setInput } = useContext(StoreContext);
  const addTodo = (event) => {
    event.preventDefault();
    const enteredTodo = input;
    setTodos([...todos, { id: todos.length + 1, todo: enteredTodo }]);
    setInput("");
  };
  return (
    <>
      <form onSubmit={addTodo}>
        <div className="flex flex-row justify-center items-center">
          <Input input={input} setInput={setInput} />
          <Button />
        </div>
      </form>
    </>
  );
};

export default Form;

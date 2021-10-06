import Branding from "./components/branding";
import Container from "./components/container";
import Input from "./components/input";
import Button from "./components/button";
import List from "./components/list";

const TodoList = () => {
  return (
    <>
      <Container>
        <Branding />
        <div className="flex flex-row justify-center items-center">
          <Input />
          <Button />
        </div>
        <List />
      </Container>
    </>
  );
};

export default TodoList;

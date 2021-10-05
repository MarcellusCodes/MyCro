import Branding from "./components/branding";
import Container from "./components/container";
import Input from "./components/input";
import Button from "./components/button";

const TodoList = () => {
  return (
    <>
      <Container>
        <Branding />
        <div className="flex flex-row justify-center items-center">
          <Input />
          <Button />
        </div>
      </Container>
    </>
  );
};

export default TodoList;

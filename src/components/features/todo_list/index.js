import Branding from "./components/branding";
import Container from "./components/container";
import Input from "./components/input";

const TodoList = () => {
  return (
    <>
      <Container>
        <Branding />
        <div className="flex flex-row">
          <Input />
        </div>
      </Container>
    </>
  );
};

export default TodoList;

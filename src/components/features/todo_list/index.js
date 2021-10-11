import Branding from "./components/branding";
import Container from "./components/container";
import Input from "./components/input";
import Button from "./components/button";
import List from "./components/list";
import Form from "./components/form";
import { StoreProvider } from "./stores/store";
import { AnimatePresence } from "framer-motion";

const TodoList = () => {
  return (
    <>
      <StoreProvider>
        <Container>
          <Branding />
          <Form />
          <AnimatePresence>
            <List />
          </AnimatePresence>
        </Container>
      </StoreProvider>
    </>
  );
};

export default TodoList;

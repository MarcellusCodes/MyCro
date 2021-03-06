import { Oops, NoTodos } from "../assets/icons/empty";
import Todo from "./todo";
import { useContext, useState } from "react";
import { StoreContext } from "../stores/store";
import { motion, AnimatePresence } from "framer-motion";
const List = () => {
  const { todos } = useContext(StoreContext);

  return (
    <>
      <motion.div
        layout
        className={`border-2 border-blue-500 space-y-5 ${
          todos.length > 0 ? "bg-white" : "bg-gray-200"
        } p-4 rounded-lg shadow-lg w-full`}
      >
        {todos.length > 0 ? (
          todos.map((todo) => <Todo data={todo} key={todo.todo} />)
        ) : (
          <motion.div
            key="empty"
            initial={{
              transition: { type: "spring", bounce: 0.5, stiffness: 200 },
              opacity: 0,
              y: -100,
            }}
            animate={{
              transition: { type: "spring", bounce: 0.5, stiffness: 200 },
              opacity: 1,
              y: 0,
            }}
            exit={{
              transition: {
                type: "spring",
                bounce: 0.5,
                stiffness: 200,
              },
              opacity: 0,
              y: -100,
            }}
            className="flex flex-col items-center space-y-5 my-24"
          >
            <Oops />
            <NoTodos />
          </motion.div>
        )}
      </motion.div>
    </>
  );
};

export default List;

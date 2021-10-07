import {
  motion,
  useTransform,
  useMotionValue,
  AnimatePresence,
} from "framer-motion";
import { useState, useRef } from "react";
import Edit from "../assets/icons/edit";
import { useContext } from "react";
import { StoreContext } from "../stores/store";

const editIconMotion = {
  rest: {
    rotate: -90,
    scale: 0.9,
    transition: { type: "spring", bounce: 0.5, stiffness: 200 },
  },
  animate: {
    rotate: 0,
    scale: 1,
    transition: { type: "spring", bounce: 0.5, stiffness: 200 },
  },
  active: {
    rotate: -90,
    scale: 1.1,
    transition: { type: "spring", bounce: 0.5, stiffness: 200 },
  },
  exit: {
    rotate: 0,
    scale: 0,
    transition: { type: "spring", bounce: 0.5, stiffness: 200 },
  },
};

const todoMotion = {
  exit: {
    transition: { type: "spring", bounce: 0.5, stiffness: 200 },
    opacity: 0,
    y: -100,
  },
};

const Todo = ({ data }) => {
  const { deleteTodo, setTodos, todos, input } = useContext(StoreContext);
  const [activ, setActiv] = useState(true);
  const x = useMotionValue(0);
  const [editable, setEditable] = useState(false);
  const Range = [-70, -50, 50, 70];
  const backgroundRange = ["#EF4444", "#FFFFFF", "#FFFFFF", "#F59E0B"];
  const backgroundColor = useTransform(x, Range, backgroundRange);
  const textRange = ["#FFFFFF", "#6B7280", "#6B7280", "#FFFFFF"];
  const textColor = useTransform(x, Range, textRange);
  const [dragStartValueX, setDragStartValueX] = useState(0);
  const [dragStartValueY, setDragStartValueY] = useState(0);
  const [status, setStatus] = useState(false);

  const editTodo = (value, id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            todo: value,
          };
        }
        return todo;
      })
    );
  };

  const checkTodoAction = (dragEndValueX, dragEndValueY, id) => {
    const difference_x = dragStartValueX - dragEndValueX;
    const difference_y = dragStartValueY - dragEndValueY;

    if (difference_x >= 100) {
      deleteTodo(id);
      return;
    }
    if (difference_x <= -100) {
      setEditable(true);
      return;
    }

    if (difference_y >= 70) {
      setStatus(false);
      return;
    }

    if (difference_y <= -70) {
      setStatus(true);
      return;
    }
  };
  return (
    <>
      <AnimatePresence exitBeforeEnter>
        {activ && (
          <motion.div
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
              transition: { type: "spring", bounce: 0.5, stiffness: 200 },
              opacity: 1,
              y: -100,
            }}
            contentEditable={editable}
            drag
            dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
            dragElastic={0.5}
            onDragStart={(event, info) => {
              setDragStartValueX(info.point.x);
              setDragStartValueY(info.point.y);
            }}
            onDragEnd={(event, info) => {
              checkTodoAction(info.point.x, info.point.y, data.id);
            }}
            className={`bg-white p-4 border-2 ${
              status ? "border-green-500" : ""
            } w-full rounded-lg flex flex-row items-center justify-between`}
            style={{
              x: x,
              backgroundColor: backgroundColor,
              color: textColor,
            }}
          >
            <p className={`${status ? "line-through" : ""} text-2xl`}>
              {data.todo}
            </p>
            <AnimatePresence exitBeforeEnter>
              {editable ? (
                <motion.button
                  initial="rest"
                  animate="animate"
                  whileTap="active"
                  variants={editIconMotion}
                  exit="exit"
                  onClick={() => {
                    editTodo(input, data.id);
                    setEditable(false);
                  }}
                >
                  <Edit />
                </motion.button>
              ) : (
                ""
              )}
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Todo;

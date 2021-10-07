import {
  motion,
  useTransform,
  useMotionValue,
  AnimatePresence,
} from "framer-motion";
import { useState, useRef } from "react";
import Edit from "../assets/icons/edit";

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
};

const Todo = ({ data }) => {
  const x = useMotionValue(0);
  const [editable, setEditable] = useState(false);
  const Range = [-150, -50, 50, 150];
  const backgroundRange = ["#EF4444", "#FFFFFF", "#FFFFFF", "#F59E0B"];
  const backgroundColor = useTransform(x, Range, backgroundRange);
  const textRange = ["#FFFFFF", "#6B7280", "#6B7280", "#FFFFFF"];
  const textColor = useTransform(x, Range, textRange);
  const [dragStartValueX, setDragStartValueX] = useState(0);
  const [dragStartValueY, setDragStartValueY] = useState(0);
  const [status, setStatus] = useState(false);
  const checkTodoAction = (dragEndValueX, dragEndValueY) => {
    const difference_x = dragStartValueX - dragEndValueX;
    const difference_y = dragStartValueY - dragEndValueY;

    if (difference_x >= 500) {
      alert("Todo Deleted");
      return;
    }
    if (difference_x <= -500) {
      alert("Todo Editable");
      setEditable(true);
      return;
    }

    if (difference_y >= 250) {
      setStatus(false);
      return;
    }

    if (difference_y <= -250) {
      setStatus(true);
      return;
    }
  };
  return (
    <>
      <motion.div
        contentEditable={editable}
        drag
        dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
        dragElastic={0.3}
        onDragStart={(event, info) => {
          setDragStartValueX(info.point.x);
          setDragStartValueY(info.point.y);
        }}
        onDragEnd={(event, info) => {
          checkTodoAction(info.point.x, info.point.y);
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
        <p className="text-2xl">{data.todo}</p>
        <AnimatePresence exitBeforeEnter>
          {editable ? (
            <motion.button
              initial="rest"
              animate="animate"
              whileTap="active"
              variants={editIconMotion}
              exit={{
                rotate: 0,
                scale: 0,
                transition: { type: "spring", bounce: 0.5, stiffness: 200 },
              }}
              onClick={() => {
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
    </>
  );
};

export default Todo;

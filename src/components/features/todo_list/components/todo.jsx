import { motion, useTransform, useMotionValue } from "framer-motion";
import { useState } from "react";

const Todo = () => {
  const x = useMotionValue(0);
  const Range = [-150, -50, 50, 150];
  const backgroundRange = ["#EF4444", "#FFFFFF", "#FFFFFF", "#F59E0B"];
  const backgroundColor = useTransform(x, Range, backgroundRange);
  const textRange = ["#FFFFFF", "#6B7280", "#6B7280", "#FFFFFF"];
  const textColor = useTransform(x, Range, textRange);
  const [dragStartValue, setDragStartValue] = useState(0);
  const checkTodoAction = (dragEndValue) => {
    const difference = dragStartValue - dragEndValue;
    console.log(dragStartValue, dragEndValue);
    console.log(difference);
    if (difference >= 500) {
      alert("Todo Deleted");
      return;
    }
    if (difference <= -500) {
      alert("Todo Editable");
      return;
    }
  };
  return (
    <>
      <motion.div
        drag
        dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
        dragElastic={0.3}
        onDragStart={(event, info) => {
          setDragStartValue(info.point.x);
        }}
        onDragEnd={(event, info) => {
          checkTodoAction(info.point.x);
          setDragStartValue(0);
        }}
        className="bg-white p-4 border-2 w-full rounded-lg cursor-move"
        style={{
          x: x,
          backgroundColor: backgroundColor,
          color: textColor,
        }}
      >
        <p className="text-2xl">Grocery Shopping</p>
      </motion.div>
    </>
  );
};

export default Todo;

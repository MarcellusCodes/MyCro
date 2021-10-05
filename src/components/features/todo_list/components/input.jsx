import { motion } from "framer-motion";
const Input = () => {
  return (
    <>
      <motion.input
        whileHover={{ backgroundColor: "#93C5FD" }}
        whileFocus={{ backgroundColor: "#FFFFFF" }}
        className="border-2 border-blue-500 focus:outline-none bg-gray-200 p-3 rounded-lg shadow-lg w-full"
      />
    </>
  );
};

export default Input;

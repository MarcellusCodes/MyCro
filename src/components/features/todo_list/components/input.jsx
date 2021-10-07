import { motion } from "framer-motion";
const Input = ({ input, setInput }) => {
  return (
    <>
      <motion.input
        value={input}
        onChange={(event) => {
          setInput(event.target.value);
        }}
        whileHover={{ backgroundColor: "#93C5FD" }}
        whileFocus={{ backgroundColor: "#FFFFFF" }}
        className="border-2 border-blue-500 focus:outline-none bg-gray-200 p-3 rounded-lg shadow-lg w-full"
      />
    </>
  );
};

export default Input;

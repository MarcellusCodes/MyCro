import { motion } from "framer-motion";
const Input = () => {
  return (
    <>
      <motion.input
        whileHover={{ borderColor: "#FF0000", borderWidth: "2px" }}
        whileTap={{
          BorderColor: "#FF0000",
        }}
        className="border-2 border-red-300"
      />
    </>
  );
};

export default Input;

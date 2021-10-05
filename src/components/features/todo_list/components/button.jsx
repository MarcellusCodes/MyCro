import { motion } from "framer-motion";

const IconMotion = {
  rest: {
    rotate: 0,
  },
  hover: {
    rotate: -90,
  },
  active: {
    rotate: 180,
  },
};

const Button = () => {
  return (
    <>
      <motion.button
        initial="rest"
        whileHover="hover"
        animate="rest"
        whileActive="active"
        className="shadow-lg rounded-lg p-2 flex justify-center items-center border-2 border-blue-500 ml-1 origin-center"
      >
        <motion.svg
          style={{ originX: "50%", originY: "50%" }}
          variants={IconMotion}
          height="33"
          viewBox="0 0 426.66667 426.66667"
          width="33"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#3B82F6"
            d="m405.332031 192h-170.664062v-170.667969c0-11.773437-9.558594-21.332031-21.335938-21.332031-11.773437 0-21.332031 9.558594-21.332031 21.332031v170.667969h-170.667969c-11.773437 0-21.332031 9.558594-21.332031 21.332031 0 11.777344 9.558594 21.335938 21.332031 21.335938h170.667969v170.664062c0 11.777344 9.558594 21.335938 21.332031 21.335938 11.777344 0 21.335938-9.558594 21.335938-21.335938v-170.664062h170.664062c11.777344 0 21.335938-9.558594 21.335938-21.335938 0-11.773437-9.558594-21.332031-21.335938-21.332031zm0 0"
          />
        </motion.svg>
      </motion.button>
    </>
  );
};

export default Button;

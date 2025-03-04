import { FC } from "react";
import { motion } from "framer-motion";
import { IButton } from "../../types";

export const Button: FC<IButton> = ({ label, customClass }) => {
  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`px-2.5 py-1.5 text-sm font-medium text-white bg-[#7839EE] rounded-lg ${customClass}`}
    >
      {label}
    </motion.button>
  );
};

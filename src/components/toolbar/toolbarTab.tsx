import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ToolbarTabProps {
  children: ReactNode;
  isActive: boolean;
  onClick: () => void;
}

export const ToolbarTab = ({
  children,
  isActive,
  onClick,
}: ToolbarTabProps) => {
  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={`px-3 py-2 rounded-[10px] text-sm relative font-medium shadow-inner-[0px_0px_0px_1px_#E5E5E599_inset];
] ${isActive ? "bg-[#F7F7F7] text-[#424242]" : "text-[#737373]"}`}
    >
      {children}
      {isActive && (
        <motion.div
          layoutId="active-tab"
          className="absolute inset-0 bg-[#F7F7F7] rounded-[10px] -z-10"
        />
      )}
    </motion.button>
  );
};

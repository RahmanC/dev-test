import { Icon } from "@iconify/react";
import { motion, AnimatePresence } from "framer-motion";

interface ToastProps {
  message: string;
  isVisible: boolean;
  onClose: () => void;
}

export const Toast = ({ message, isVisible, onClose }: ToastProps) => {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          className="fixed bottom-20 lg:bottom-[70px] right-7 lg:right-[70px] bg-[#FCFCFC] shadow-[0px_8px_16px_0px_#29292914,0px_4px_8px_0px_#29292914,0px_0px_0px_1px_#E5E5E5B2] rounded-xl p-2 w-[440px] flex items-center justify-between gap-4"
          onAnimationComplete={() => {
            setTimeout(onClose, 3000);
          }}
        >
          <div className="flex items-center gap-2">
            <Icon
              icon="ph:check-circle-fill"
              className="w-5 h-5 text-[#17B26A]"
            />

            <span className="text-[#292929] text-sm font-medium">
              {message}
            </span>
          </div>
          <motion.button
            type="button"
            onClick={onClose}
            className="cursor-pointer"
          >
            <Icon icon="ph:x" className="w-4.5 h-4.5 text-[#737373]" />
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

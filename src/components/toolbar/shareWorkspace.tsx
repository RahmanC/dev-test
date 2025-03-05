import { motion } from "framer-motion";
import { useState } from "react";
import { Button, Input, Toast } from "../common";
import { Icon } from "@iconify/react/dist/iconify.js";

export const ShareWorkspace = () => {
  const [isSharing, setIsSharing] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("/mylink.com");
    setShowToast(true);
  };

  const ToggleButton = () => (
    <motion.button
      transition={{ duration: 0.2, ease: "easeInOut" }}
      onClick={() => setIsSharing(!isSharing)}
      className={`!w-8 h-4.5
        shadow-[0px_2px_4px_0px_#0000000A,0px_0px_8px_0px_#00000005_inset,0px_0px_0px_0.75px_#0000000F_inset,0px_2px_4px_0px_#0000000A_inset,0px_1px_1px_0px_#0000000A_inset]
        ${isSharing ? "bg-[#875BF7]" : "bg-[#E5E5E5] "} rounded-full relative`}
    >
      <motion.div
        className="w-3.5 h-3.5 bg-white rounded-full absolute top-0.5 
        shadow-[0px_0px_1px_0px_#00000014,0px_1px_2px_0px_#0000001F,0px_3px_3px_0px_#0000000A,0px_5px_4px_0px_#00000005,0px_0px_0px_0.5px_#00000005,0px_1px_0px_0px_#FFFFFF_inset,0px_0px_2px_1px_#FFFFFF_inset]"
        initial={{ opacity: 0, x: 0 }}
        animate={{
          left: isSharing ? "calc(100% - 1.025rem)" : "0.125rem",
          backgroundColor: "#fff",
          opacity: 1,
          x: 1,
        }}
      />
    </motion.button>
  );

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.2, ease: "easeInOut" }}
      exit={{ opacity: 0, x: -20 }}
      className="space-y-2 bg-[#FCFCFC] shadow-[0px_1px_2px_0px_#09090B0D,0px_0px_0px_1px_#09090B0D] rounded-[10px] p-3"
    >
      <div className="flex justify-between items-center">
        <p className="text-sm font-medium text-[#292929]">
          Sharing is {isSharing ? "on" : "off"}
        </p>
        {isSharing && <ToggleButton />}
      </div>

      {!isSharing ? (
        <div className="flex justify-between gap-4 items-start">
          <p className="text-[#737373] text-[13px] font-normal leading-[19.5px]">
            To share your workspace with other people you need to publish it
            first.
          </p>
          <ToggleButton />
        </div>
      ) : (
        <div>
          <Input placeholder="/mylink.com" value="/mylink.com" />
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleCopy}
            className="mt-6 -translate-y-1/2 px-2.5 py-1.5 shadow-[0px_0px_0px_1px_#00000014,0px_1px_2px_0px_#0000001F] bg-white/5 rounded-lg flex items-center gap-1 text-sm font-medium cursor-pointer hover:bg-[#F5F5F5]"
          >
            <Icon icon="solar:copy-linear" className="text-[#525252] w-4.5" />
            Copy
          </motion.button>
        </div>
      )}

      <div className="flex justify-end gap-2">
        <Button label="Cancel" customClass="!text-[#292929] bg-transparent" />
        <Button label="Create secret key" />
      </div>

      <Toast
        message="Link to secret key copied!"
        isVisible={showToast}
        onClose={() => setShowToast(false)}
      />
    </motion.div>
  );
};

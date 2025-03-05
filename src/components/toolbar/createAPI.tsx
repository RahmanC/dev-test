import { motion } from "framer-motion";
import { Button, Input } from "../common";

export const CreateAPI = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.2, ease: "easeInOut" }}
      exit={{ opacity: 0, x: -20 }}
      className="space-y-2 bg-[#FCFCFC] shadow-[0px_1px_2px_0px_#09090B0D,0px_0px_0px_1px_#09090B0D] rounded-[10px] p-3"
    >
      <p className="text-sm font-medium text-[#292929]">Create new API key</p>
      <p className="text-[#737373] text-[13px] font-normal">
        Your secret API Key will be shared with all users belonging to your
        organization.
      </p>
      <Input placeholder="API key name" />

      <div className="flex justify-end gap-2 mt-3">
        <Button label="Cancel" customClass="!text-[#292929] bg-transparent" />
        <Button label="Create secret key" />
      </div>
    </motion.div>
  );
};

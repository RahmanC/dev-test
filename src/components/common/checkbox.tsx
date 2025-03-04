import { FC } from "react";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";

import { ICheckBox } from "../../types";

export const Checkbox: FC<ICheckBox> = ({
  checked,
  onChange,
  label,
  type = "checkbox",
  suffix,
}) => {
  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      type="button"
      onClick={onChange}
    >
      <input type="checkbox" className="hidden" />
      <motion.div initial={false} className="flex items-center gap-2">
        <div
          className={`flex justify-center items-center ${
            type === "radio" ? "rounded-full w-4 h-4" : "rounded-sm w-4 h-4"
          }  ${
            checked
              ? "bg-[#875BF7]"
              : "bg-[#FAFAFA] rounded-[3px] shadow-[0px_0px_0px_1px_#00000014,0px_1px_2px_0px_#0000001F]"
          } `}
        >
          {type === "radio" ? (
            <div
              className={`rounded-full w-2 h-2 bg-[#FAFAFA] ${
                checked
                  ? "shadow-[0px_0px_0px_1px_#7839EE,0px_1px_2px_0px_#491C9680]"
                  : ""
              }`}
            ></div>
          ) : (
            <Icon
              icon={checked ? "material-symbols-light:check-rounded" : ""}
              className={checked ? "text-white" : ""}
            />
          )}
        </div>
        {label && (
          <p className="text-[13px] leading-5 text-[#737373] flex items-center gap-1">
            {label}
            <span className="bg-[#ECE9FECC]/80 py-0.5 px-1 rounded-md text-xs font-medium text-[#7839EE]">
              {suffix}
            </span>
          </p>
        )}
      </motion.div>
    </motion.button>
  );
};

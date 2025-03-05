import { FC } from "react";
import { IInput } from "../../types";

export const Input: FC<IInput> = ({
  label,
  type = "text",
  placeholder,
  customClass,
  value = "",
}) => {
  return (
    <div className={customClass}>
      <label className="block text-sm font-medium text-[#292929] mb-2">
        {label}
      </label>

      <input
        type={type}
        placeholder={placeholder}
        value={value}
        className="w-full px-3 py-2.5  rounded-lg shadow-[0px_1px_2px_0px_#1212170D,0px_0px_0px_1px_#D6D6D6B2_inset] focus:outline-none  
        focus:shadow-[0px_0px_0px_3px_#ECE9FE,0px_1px_2px_0px_#1212170D,0px_0px_0px_1px_#A48AFB_inset] focus:border-transparent
        placeholder:text-[#A3A3A3] text-sm font-normal hover:shadow-[0px_0px_0px_3px_#D6D6D6B2_inset,0px_1px_2px_0px_#1212170D,0px_0px_0px_1px_#A48AFB_inset] text-[#292929]"
      />
    </div>
  );
};

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Icon } from "@iconify/react";

interface Guest {
  id: number;
  avatar: string;
  timeZone: string;
}

interface CalendarWidgetProps {
  title: string;
  startTime: string;
  endTime: string;
  guests: Guest[];
}

export const CalendarWidget = ({
  title,
  startTime,
  endTime,
  guests,
}: CalendarWidgetProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [activeTimelineIndex, setActiveTimelineIndex] = useState<number | null>(
    null
  );

  return (
    <motion.div
      layout
      className="bg-white rounded-[18px] shadow-[0px_8px_16px_0px_#0000000A,0px_4px_8px_0px_#0000000A,0px_0px_0px_1px_#09090B0D] w-max cursor-pointer"
      onClick={() => setIsExpanded(!isExpanded)}
    >
      <motion.div
        layout
        className={`${isExpanded ? "w-[450px]" : "w-[168px]"} space-y-4`}
      >
        <div className="flex justify-between items-start p-4">
          <div>
            <motion.span
              layout
              className="bg-[#ECE9FECC]/80 rounded-md py-1 px-1.5 text-xs text-[#7839EE] font-medium mb-4 w-max block"
            >
              In 15 mins
            </motion.span>
            <motion.h2 layout className="text-sm font-medium text-[#292929]">
              {title}
            </motion.h2>
            <motion.p
              layout
              className="text-[#737373] text-[13px] font-normal mt-1"
            >
              {startTime} → {endTime}
            </motion.p>
          </div>
          {isExpanded && (
            <motion.div layout className="bg-[#ECE9FECC]/80 p-1 rounded-md">
              <Icon
                icon="material-symbols:video-camera-front"
                className="text-[#7839EE] w-4 h-4"
              />
            </motion.div>
          )}
        </div>

        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="p-4 border-t border-t-[#09090B0D] flex flex-col gap-2 justify-between items-center"
            >
              <div className="w-full flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <span className="text-[#292929] text-sm font-medium">
                    Guests
                  </span>
                  <Icon
                    icon="heroicons:globe-alt-20-solid"
                    className="text-[#A3A3A3] w-4 h-4"
                  />
                  <span className="text-sm text-[#525252] font-normal">
                    {guests.length}
                  </span>
                </div>
                <div className="text-[#737373] text-[13px] font-normal leading-5 font-mono">
                  your time / gmt-3
                </div>
              </div>

              <div className="w-full flex items-center justify-between">
                <motion.div
                  layout
                  className={`flex ${
                    activeTimelineIndex !== null ? "gap-4" : "gap-0"
                  }`}
                >
                  {guests.map((guest, index) => (
                    <motion.div
                      key={guest.id}
                      className={`w-8 h-8 rounded-full overflow-hidden  ${
                        index !== 0 && "-ml-2"
                      } ${
                        activeTimelineIndex === guest.id
                          ? "shadow-[0px_0px_0px_2px_#7839EE]"
                          : "shadow-[0px_0px_0px_2px_#FFFFFF]"
                      }`}
                    >
                      <img
                        src={guest.avatar}
                        alt="Guest avatar"
                        className={`w-full h-full object-cover`}
                      />
                    </motion.div>
                  ))}
                </motion.div>

                <div className="flex items-center gap-1.5">
                  {Array.from({ length: 7 }).map((_, index) => (
                    <motion.div
                      key={index}
                      className={`w-2 h-7 rounded-full cursor-pointer ${
                        activeTimelineIndex === index
                          ? "bg-[#875BF7]"
                          : "bg-[#E5E5E5]"
                      }`}
                      onHoverStart={() => setActiveTimelineIndex(index)}
                      onHoverEnd={() => setActiveTimelineIndex(null)}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
};

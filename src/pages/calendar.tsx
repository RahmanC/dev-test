import { motion } from "framer-motion";
import { CalendarWidget } from "../components/calendar/CalendarWidget";
import debb from "../assets/1.jpg";
import jerry from "../assets/2.jpg";
import you from "../assets/3.jpg";

export const Calendar = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      exit={{ opacity: 0, y: -20 }}
      className="w-full max-w-md mx-auto"
    >
      <CalendarWidget
        title="Engineering sync"
        startTime="1:30 PM"
        endTime="2:30 PM"
        guests={[
          {
            id: 1,
            avatar: jerry,
            timeZone: "jerry -5 hrs / gmt+8",
          },
          {
            id: 3,
            avatar: debb,
            timeZone: "debbie -2 hrs / gmt-5",
          },
          {
            id: 7,
            avatar: you,
            timeZone: "your time / gmt-3",
          },
        ]}
      />
    </motion.div>
  );
};

import { CalendarWidget } from "../components/calendar/CalendarWidget";
import debb from "../assets/1.jpg";
import jerry from "../assets/2.jpg";
import you from "../assets/3.jpg";

export const Calendar = () => {
  return (
    <div className="w-full max-w-md mx-auto">
      <CalendarWidget
        title="Engineering sync"
        startTime="1:30 PM"
        endTime="2:30 PM"
        guests={[
          {
            id: 1,
            avatar: debb,
            timeZone: "debbie -2 hrs / gmt-5",
          },
          {
            id: 3,
            avatar: jerry,
            timeZone: "jerry -5 hrs / gmt+8",
          },
          {
            id: 7,
            avatar: you,
            timeZone: "your time / gmt-3",
          },
        ]}
      />
    </div>
  );
};

import { motion } from "framer-motion";
import { useState } from "react";
import { Button, Checkbox } from "../common";

export const ConnectRepositories = () => {
  const [selectedEvents, setSelectedEvents] = useState<string[]>([]);

  const events = [
    { id: "deployment-created", label: "Deployment created" },
    { id: "deployment-error", label: "Deployment error" },
    { id: "deployment-cancelled", label: "Deployment cancelled" },
  ];

  const toggleEvent = (eventId: string) => {
    setSelectedEvents((prev) =>
      prev.includes(eventId)
        ? prev.filter((id) => id !== eventId)
        : [...prev, eventId]
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.2, ease: "easeInOut" }}
      exit={{ opacity: 0, x: -20 }}
      className="space-y-2 bg-[#FCFCFC] shadow-[0px_1px_2px_0px_#09090B0D,0px_0px_0px_1px_#09090B0D] rounded-[10px] p-3"
    >
      <p className="text-sm font-medium text-[#292929] flex items-center gap-1">
        Connect repositories to
        <span className="bg-[#ECE9FECC]/80 py-0.5 px-1 rounded-md text-xs text-[#7839EE]">
          acme
        </span>
      </p>

      <div className="grid grid-cols-1 gap-2">
        {events.map((event) => (
          <Checkbox
            key={event.id}
            checked={selectedEvents.includes(event.id)}
            onChange={() => toggleEvent(event.id)}
            label={event.label}
          />
        ))}
      </div>

      <div className="flex justify-end gap-2">
        <Button label="Cancel" customClass="!text-[#292929] bg-transparent" />
        <Button label="Connect repositories" />
      </div>
    </motion.div>
  );
};

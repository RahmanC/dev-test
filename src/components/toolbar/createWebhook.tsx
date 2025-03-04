import { motion } from "framer-motion";
import { useState } from "react";
import { Button, Checkbox, Input } from "../common";

export const CreateWebhook = () => {
  const [selectedEvents, setSelectedEvents] = useState<string[]>([]);
  const [selectedProject, setSelectedProject] = useState<"all" | "tagged">(
    "all"
  );

  const events = [
    { id: "deployment-created", label: "Deployment created" },
    { id: "deployment-error", label: "Deployment error" },
    { id: "deployment-cancelled", label: "Deployment cancelled" },
    { id: "project-created", label: "Project created" },
    { id: "project-deleted", label: "Project deleted" },
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
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="space-y-2.5"
    >
      <p className="text-sm text-[#292929] font-medium">Create webhook</p>

      <div className="space-y-5 rounded-[10px] p-3 bg-[#FCFCFC] shadow-[0px_1px_2px_0px_#09090B0D,0px_0px_0px_1px_#09090B0D]">
        <Input placeholder="https://myapp.com/webhooks" label="Endpoint" />

        <div>
          <label className="block text-sm font-medium text-[#292929] mb-2">
            Projects
          </label>
          <div className="flex flex-col md:flex-row gap-3 md:gap-5">
            <Checkbox
              checked={selectedProject === "all"}
              onChange={() => setSelectedProject("all")}
              type="radio"
              label="All team projects in"
              suffix="acme"
            />
            <Checkbox
              checked={selectedProject === "tagged"}
              onChange={() => setSelectedProject("tagged")}
              type="radio"
              label="Tagged projects"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-[#292929] mb-2">
            Events
          </label>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 bg-[#F5F5F5] rounded-[10px] p-3">
            {events.map((event) => (
              <Checkbox
                key={event.id}
                checked={selectedEvents.includes(event.id)}
                onChange={() => toggleEvent(event.id)}
                label={event.label}
              />
            ))}
          </div>
        </div>
        <div className="flex justify-end gap-2">
          <Button label="Cancel" customClass="!text-[#292929] bg-transparent" />
          <Button label="Create webhook" />
        </div>
      </div>
    </motion.div>
  );
};

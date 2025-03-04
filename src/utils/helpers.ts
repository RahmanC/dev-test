import { Guest } from "../types";

export const getTimelineState = (
  index: number,
  guests: Guest[],
  activeTimelineIndex: number | null
) => {
  const guest = guests.find((g) => g.id === index);
  if (activeTimelineIndex === index && guest) return "hover";
  if (guest) return "available";
  return "disabled";
};

export const getTimelineColor = (state: string) => {
  switch (state) {
    case "hover":
      return "bg-[#875BF7]";
    case "available":
      return "bg-[#E5E5E5]";
    case "disabled":
      return "bg-[#F5F5F5]";
  }
};

export interface Guest {
  id: number;
  avatar: string;
  timeZone: string;
}

export interface CalendarWidgetProps {
  title: string;
  startTime: string;
  endTime: string;
  guests: Guest[];
}

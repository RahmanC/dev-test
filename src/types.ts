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

export interface ICheckBox {
  checked: boolean;
  onChange?: () => void;
  label?: string;
  type?: "checkbox" | "radio";
  suffix?: string;
}

export interface IInput {
  placeholder: string;
  label?: string;
  type?: string;
  customClass?: string;
}

export interface IButton {
  label: string;
  customClass?: string;
}

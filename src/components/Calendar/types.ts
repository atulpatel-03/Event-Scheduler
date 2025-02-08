export type Event = {
  id: number;
  date: string;
  day: number;
  description: string;
};

export interface CalendarProps {
  onSelectDate: (date: number) => void;
  onAddEvent: (date: number, description: string) => void;
  onEditEvent: (date: number, description: string) => void;
  onDeleteEvent: (date: number) => void;
}

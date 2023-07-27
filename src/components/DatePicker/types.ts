// eslint-disable-next-line no-undef
export type DateComponent = Date | dateFns | null;

export interface DatePickerProps {
  value: DateComponent;
  name: string;
  register?: any;
  label?: string;
  dateAndTime?: boolean;
  minDate?: DateComponent;
  maxDate?: DateComponent;
  onChange: (_newValue: DateComponent) => void;
}

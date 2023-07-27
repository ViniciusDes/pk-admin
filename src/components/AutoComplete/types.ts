export interface Option {
  label: string;
  value: string | number;
}
export interface AutoCompleteOptions {
  name: string;
  options: Array<Option>;
  onInputChange?: (value_: string) => void;
  label?: string;
  control: any;
  error?: string | any;
  register?: any;
}

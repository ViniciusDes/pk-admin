export interface CheckboxProps {
  label?: string;
  checked: boolean;
  defaultChecked?: boolean;
  value: string | number;
  onChange?: (ev: { target: HTMLInputElement }) => void;
}

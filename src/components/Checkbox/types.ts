import { SyntheticEvent } from 'react';

export interface CheckboxProps {
  label?: string;
  checked: boolean;
  defaultChecked?: boolean;
  value: string | number;
  onChange?: (event: SyntheticEvent<Element, Event>, checked: boolean) => void;
}

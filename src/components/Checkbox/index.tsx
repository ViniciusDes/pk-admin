import * as React from 'react';
// import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import { Checkbox as CheckboxMUI } from '@mui/material';
import * as S from './styles';
import { CheckboxProps } from './types';
import { theme } from '../../styles/theme';
import Label from '../Label';

const Checkbox: React.FC<CheckboxProps> = ({ label, checked, defaultChecked, value, onChange }) => {
  return (
    <S.Container>
      <FormControlLabel
        control={
          <CheckboxMUI
            defaultChecked={defaultChecked}
            checked={checked}
            style={{
              padding: '0.3rem',
            }}
          />
        }
        onChange={onChange}
        label={label ?? ''}
        value={value}
        sx={{
          padding: '0',
          color: theme.colors.text,
        }}
      />
    </S.Container>
  );
};

export default Checkbox;

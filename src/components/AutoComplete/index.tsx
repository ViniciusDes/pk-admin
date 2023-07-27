import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { Controller } from 'react-hook-form';
import { FiAlertCircle } from 'react-icons/fi';
import * as S from './styles';
import { AutoCompleteOptions, Option } from './types';

const AutoComplete: React.FC<AutoCompleteOptions> = ({
  options,
  onInputChange,
  label,
  name,
  control,
  error,
}) => {
  return (
    <S.Container>
      {label && (
        <S.Label>
          {label ?? ''}
          {error && (
            <S.Error title={error}>
              <FiAlertCircle color="#E80000" size={20} />
            </S.Error>
          )}
        </S.Label>
      )}
      <Controller
        control={control}
        name={name}
        render={({ field: { ref, onChange, value, ...field } }) => {
          return (
            <Autocomplete
              size="small"
              disablePortal
              id="combo-box-demo"
              onChange={(_: any, data: Option | null) => onChange(data && data.value)}
              options={options}
              sx={{ width: '100%' }}
              getOptionLabel={(option: Option) => option.label}
              value={options.find((option) => option.value === value) || null}
              renderInput={(params) => (
                <TextField
                  {...params}
                  {...field}
                  ref={ref}
                  label=""
                  onChange={(e) => onInputChange && onInputChange(e.target.value)}
                />
              )}
            />
          );
        }}
      />
    </S.Container>
  );
};

export default AutoComplete;

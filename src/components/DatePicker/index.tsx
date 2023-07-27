import React, { useCallback, useRef, useState } from 'react';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import Stack from '@mui/material/Stack';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import 'dayjs/locale/pt-br';
import ptBr from 'date-fns/locale/pt-BR';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { DateTimePicker } from '@mui/x-date-pickers';
import { DatePickerProps } from './types';
import * as S from './styles';

const DatePicker: React.FC<DatePickerProps> = ({
  dateAndTime,
  label,
  value,
  onChange,
  minDate,
  maxDate,
  ...rest
}) => {
  const inputRef = useRef<HTMLDivElement | any>(null);
  const [isFocused, setIsFocused] = useState(false);

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);
  }, []);

  return (
    <S.Wrapper>
      <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={ptBr}>
        <Stack>
          <S.Container>
            <S.Label>{label} </S.Label>

            {dateAndTime ? (
              <DateTimePicker
                slotProps={{
                  textField: {
                    style: {
                      width: '100%',
                    },
                    onFocus: handleInputFocus,
                    onBlur: handleInputBlur,
                    focused: isFocused,
                  },
                }}
                ref={inputRef}
                label=""
                value={value}
                onChange={onChange}
                minDate={minDate ?? undefined}
                maxDate={maxDate ?? undefined}
                {...rest}
              />
            ) : (
              <DesktopDatePicker
                label=""
                value={value}
                onChange={onChange}
                minDate={minDate ?? undefined}
                maxDate={maxDate ?? undefined}
                {...rest}
              />
            )}
          </S.Container>
        </Stack>
      </LocalizationProvider>
    </S.Wrapper>
  );
};

export default DatePicker;

/* eslint-disable no-alert */
import { FiAlertCircle } from 'react-icons/fi';
import React, { useCallback, useRef, useState } from 'react';
import * as S from './styles';
import { InputProps } from './types';

const TextArea: React.FC<InputProps> = ({
  label,
  name,
  error,
  value,
  marginHorizontal,
  marginVertical,
  backgroundWhite,
  register,
  width,
  height,
  ...props
}) => {
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);

    setIsFilled(!!inputRef.current?.value);
  }, []);

  return (
    <S.Container
      marginHorizontal={marginHorizontal}
      marginVertical={marginVertical}
      width={width}
      height={height}
      minWidth={props.minWidth}
      flex={props.flex}
    >
      {label && <S.Label htmlFor={name}>{label}</S.Label>}

      <S.InputWrapper
        backgroundWhite={backgroundWhite}
        isErrored={!!error}
        isFilled={isFilled}
        isFocused={isFocused}
        width={width}
        height={height}
        flex={props.flex}
      >
        <textarea
          id={name}
          name={name}
          value={value}
          ref={inputRef}
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          {...props}
          {...(register ? register(name) : [])}
        />

        {error && (
          <S.Error title={error}>
            <FiAlertCircle color="#E80000" size={20} />
          </S.Error>
        )}
      </S.InputWrapper>
    </S.Container>
  );
};

export default TextArea;

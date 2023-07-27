import React, { InputHTMLAttributes, useCallback, useRef, useState } from 'react';
import { FiAlertCircle } from 'react-icons/fi';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import InputMask from 'react-input-mask';
import { InputProps } from './types';

import * as S from './styles';

const Input: React.FC<InputProps> = ({
  name,
  label,
  error,
  mask,
  value,
  marginVertical,
  marginHorizontal,
  showPassword,
  backgroundWhite,
  leftIcon: LeftIcon,
  rightIcon: RightIcon,
  beforeMaskedStateChange,
  type,
  register,
  onlyBorderBottom,
  ...rest
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);
  const [showPasswordStatus, setShowPasswordStatus] = useState(false);

  const handleInputFocus = useCallback(() => {
    setIsFocused(() => true);
  }, []);

  const handleInputBlur = useCallback(() => {
    setIsFocused(() => false);
    setIsFilled(!!inputRef.current?.value);
  }, []);

  const togglePasswordVisiblity = useCallback(() => {
    setShowPasswordStatus(!showPasswordStatus);
  }, [showPasswordStatus]);

  const validateTypePassword = () => {
    if (showPassword) {
      return showPasswordStatus ? 'text' : 'password';
    }
    return type;
  };

  return (
    <S.Container
      marginHorizontal={marginHorizontal}
      marginVertical={marginVertical}
      width={rest?.width}
      height={rest?.height}
    >
      <S.Label>{label} </S.Label>
      <S.InputWrapper
        backgroundWhite={backgroundWhite}
        isErrored={!!error}
        isFilled={isFilled}
        isFocused={isFocused}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        // width={rest?.width}
        height={rest?.height}
        onlyBorderBottom={onlyBorderBottom}
        disabled={rest.disabled}
      >
        {LeftIcon && <LeftIcon size={20} />}
        {!mask && (
          <input
            id={name}
            name={name}
            value={value}
            ref={inputRef}
            type={validateTypePassword()}
            // onBlur={formFieldControl?.field?.onBlur}
            {...(register ? register(name) : [])}
            {...rest}
          />
        )}
        {mask && (
          <InputMask
            mask={mask}
            id={name}
            name={name}
            value={value}
            // maskPlaceholder={null}
            // beforeMaskedStateChange={beforeMaskedStateChange}
            {...(register ? register(name) : [])}
            {...rest}
          >
            {(inputProps: InputHTMLAttributes<HTMLInputElement>) => (
              <input type="text" {...inputProps} />
            )}
          </InputMask>
        )}
        {showPassword && (
          <S.PasswordButton type="button" onClick={togglePasswordVisiblity}>
            {showPasswordStatus ? <AiFillEyeInvisible size={20} /> : <AiFillEye size={20} />}
          </S.PasswordButton>
        )}
        {RightIcon && <RightIcon size={20} />}
        {error && (
          <S.Error title={error}>
            <FiAlertCircle color="#E80000" size={20} />
          </S.Error>
        )}
      </S.InputWrapper>
    </S.Container>
  );
};

export default Input;

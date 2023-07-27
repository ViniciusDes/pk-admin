import { transparentize } from 'polished';
import styled, { css } from 'styled-components';
import Tooltip from '../Tooltip';

interface ContainerProps {
  marginVertical?: string;
  marginHorizontal?: string;
  width?: string | number;
  height?: string | number;
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: ${({ width }) => width || '100%'};
  height: 10px;
  /* height: ${({ height }) => height || 'auto'}; */
  margin-top: ${({ marginVertical }) => marginVertical || 'none'};
  margin-bottom: ${({ marginVertical }) => marginVertical || 'none'};
  margin-left: ${({ marginHorizontal }) => marginHorizontal || 'none'};
  margin-right: ${({ marginHorizontal }) => marginHorizontal || 'none'};
`;

export const Label = styled.label`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: ${({ theme }) => theme.colors.text};
  font-size: ${({ theme }) => theme.fontSize.sm};
  font-weight: 600;
`;

interface InputWrapperProps {
  isFocused: boolean;
  isFilled: boolean;
  isErrored: boolean;
  backgroundWhite?: boolean;
  width?: string | number;
  height?: string | number;
  onlyBorderBottom?: boolean;
  disabled?: boolean;
}

const InputContainer = css<InputWrapperProps>`
  display: flex;
  align-items: center;
  padding: 0.1rem 0.3rem;
  border-radius: 0.3rem;
  border: ${({ theme }) => `1px solid ${transparentize(0.8, theme.colors.secondary)}`};
  ${({ onlyBorderBottom }) =>
    onlyBorderBottom &&
    css`
      border-top-width: 0;
      border-left-width: 0;
      border-right-width: 0;
    `}
  background: ${({ theme, disabled }) => (disabled ? theme.colors.base : theme.colors.white)};
  color: ${({ theme }) => theme.colors.text};
  font-size: ${({ theme }) => theme.fontSize.sm};
  margin: 0.5rem 0;
  width: 100%;
  /* width: ${({ width }) => width || '100%'}; */
  height: ${({ height }) => height || 'auto'};

  svg {
    margin: 0 0.5rem;
  }

  &:focus {
    border: ${({ theme }) => `1px solid ${theme.colors.primary}`};
  }

  &:focus-within {
    border: ${({ theme }) => `1px solid ${theme.colors.primary}`};
    box-shadow: 0px 0px 4px rgba(24, 144, 255, 0.5);
  }

  input {
    width: ${({ width }) => width || '100%'};
    height: ${({ height }) => height || '2.5rem'};
    padding: 0 0 0 1rem;
    border: 0;
    background: transparent;
    color: ${({ theme }) => theme.colors.text};
    &::placeholder,
    &::-webkit-input-placeholder,
    &:-ms-input-placeholder {
      color: ${({ theme }) => theme.colors.text};
    }

    &:-webkit-autofill,
    &:-webkit-autofill:hover,
    &:-webkit-autofill:focus {
      border: 0;
      -webkit-text-fill-color: ${({ theme }) => theme.colors.text};
      -webkit-box-shadow: 0;
      transition: background-color 5000s ease-in-out 0s;
    }
  }

  input:disabled {
    background: ${({ theme }) => theme.colors.base};
  }
`;

export const InputWrapper = styled.div`
  ${InputContainer}
`;

export const Error = styled(Tooltip)`
  height: 2rem;
  margin-left: 0.5rem;

  display: flex;
  align-items: center;

  svg {
    margin: 0;
  }
  span {
    background: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.black};
    &::before {
      box-shadow: ${({ theme }) => `0px 0px 0px 1px  ${theme.colors.primary}`};
    }
  }
`;

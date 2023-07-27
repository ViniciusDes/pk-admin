import { transparentize } from 'polished'
import styled, { css } from 'styled-components'
import Tooltip from '../Tooltip'

interface ContainerProps {
  marginVertical?: string
  marginHorizontal?: string
  width?: string | number
  height?: string | number
  minWidth?: string | number
  flex?: string | number
}

interface InputWrapperProps {
  isFocused: boolean
  isFilled: boolean
  isErrored: boolean
  backgroundWhite?: boolean
  width?: string | number
  height?: string | number
  minWidth?: string | number
  flex?: string | number
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  margin-top: ${({ marginVertical }) =>
    marginVertical ? marginVertical : 'none'};
  margin-bottom: ${({ marginVertical }) =>
    marginVertical ? marginVertical : 'none'};
  margin-left: ${({ marginHorizontal }) =>
    marginHorizontal ? marginHorizontal : 'none'};
  margin-right: ${({ marginHorizontal }) =>
    marginHorizontal ? marginHorizontal : 'none'};
  width: ${({ width, flex }) => (width ? width : !flex ? '100%' : 'unset')};
  min-width: ${({ minWidth }) => minWidth && minWidth};
  flex: ${({ flex }) => flex && flex};
  height: ${({ height }) => (height ? height : 'auto')};
`

export const Label = styled.label`
  color: ${({ theme }) => theme.colors.text};
  font-size: ${({ theme }) => theme.fontSize.sm};
  font-weight: 600;
`

const InputContainer = css<InputWrapperProps>`
  display: flex;
  align-items: center;
  padding: 0.1rem 0.8rem;
  border-radius: 0.2rem;
  border: ${({ theme }) =>
    `1px solid ${transparentize(0.8, theme.colors.secondary)}`};
  background: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.text};
  font-size: ${({ theme }) => theme.fontSize.md};
  margin: 0.8rem 0;
  width: ${({ width }) => (width ? width : '100%')};

  height: ${({ height }) => (height ? height : 'auto')};

  svg {
    margin: 0 1rem;
  }

  &:focus {
    border: ${({ theme }) => `1px solid ${theme.colors.primary}`};
  }

  &:focus-within {
    border: ${({ theme }) => `1px solid ${theme.colors.primary}`};
    box-shadow: 0px 0px 4px rgba(24, 144, 255, 0.5);
  }

  textarea {
    border: 0;
    background: transparent;
    color: ${({ theme }) => theme.colors.text};
    padding: 1rem;
    resize: none;
    width: ${({ width }) => (width ? width : '100%')};
    height: ${({ height }) => (height ? height : 'auto')};

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
`

export const InputWrapper = styled.div<InputWrapperProps>`
  ${InputContainer}
  width:100%;

  ${({ backgroundWhite, theme }) =>
    backgroundWhite &&
    css`
      background: ${theme.colors.white};
    `}

  ${({ isErrored }) =>
    isErrored &&
    css`
      border: ${({ theme }) => `1px solid ${theme.colors.primary}`};
    `}
  ${({ isFocused }) =>
    isFocused &&
    css`
      color: ${({ theme }) => theme.colors.primary};
      border: ${({ theme }) => `1px solid ${theme.colors.primary}`};
    `}
  ${({ isFilled }) =>
    isFilled &&
    css`
      color: ${({ theme }) => theme.colors.primary};
    `}
`
export const Error = styled(Tooltip)`
  height: 2rem;
  margin-left: 1.6rem;
  svg {
    margin: 0;
  }
  span {
    background: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.black};
    &::before {
      border-color: ${({ theme }) => `${theme.colors.primary} transparent`};
    }
  }
`

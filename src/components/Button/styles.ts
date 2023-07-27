import styled, { css, keyframes } from 'styled-components';
import { darken, shade, transparentize } from 'polished';
import { ContainerProps } from './types';

const rotateInfinite = keyframes`
  from {
    -ms-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -webkit-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  to {
    -ms-transform: rotate(360deg);
    -moz-transform: rotate(360deg);
    -webkit-transform: rotate(360deg);
    -o-transform: rotate(360deg);
    transform: rotate(360deg);
  }
`;

const SolidButton = css<ContainerProps>`
  background: ${({ theme, color }) => color || theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  border: none;

  svg {
    color: ${({ theme }) => theme.colors.white};
  }

  &:hover {
    background: ${({ theme, color }) =>
      color ? shade(0.2, color) : shade(0.2, theme.colors.primary)};
  }

  ${({ disabled }) =>
    disabled &&
    css`
      background: ${({ theme }) => theme.colors.gray};
      color: ${({ theme }) => theme.colors.text};
      cursor: not-allowed;

      &:hover {
        background: ${({ theme }) => shade(0.2, theme.colors.gray)};
      }
    `}
`;

const OutlineButton = css<ContainerProps>`
  border: ${({ theme, color }) =>
    color ? `2px solid ${color}` : `2px solid ${theme.colors.primary}`};
  color: ${({ theme, color }) => color || theme.colors.primary};
  background: transparent;

  svg {
    color: ${({ theme, color }) => color || theme.colors.primary};
  }

  &:hover {
    background: ${({ theme, color }) =>
      color ? transparentize(0.9, color) : transparentize(0.9, theme.colors.primary)};
  }
`;

const TextButton = css<ContainerProps>`
  border: none;
  color: ${({ theme, color }) => color || theme.colors.primary};
  font-weight: 500;
  background: none;
  padding: none;
  height: auto;
  width: auto;
  box-shadow: none;

  svg {
    color: ${({ theme, color }) => color || theme.colors.primary};
  }

  &:hover {
    background: none;
    color: ${({ theme, color }) =>
      color ? darken(0.1, color) : darken(0.1, theme.colors.secondary)};
  }
`;

export const WrapperLoadgin = styled.div`
  svg {
    animation: 1s ${rotateInfinite} ease-out infinite;
  }
`;

export const Container = styled.button<ContainerProps>`
  ${({ outline }) => (outline ? OutlineButton : SolidButton)};
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  height: ${({ height }) => height || '7rem'};
  width: ${({ width }) => width || '100%'};
  border-radius: ${({ rounded }) => (rounded ? '0.4rem' : '0')};

  font-weight: bold;
  font-size: ${({ theme, size }) => {
    switch (size) {
      case 'SMALL':
        return theme.fontSize.sm;
      case 'MEDIUM':
        return theme.fontSize.md;
      case 'LARGER':
        return theme.fontSize.lg;
      default:
        return theme.fontSize.md;
    }
  }};
  outline: none;

  margin-top: ${({ marginVertical }) => marginVertical || 'none'};
  margin-bottom: ${({ marginVertical }) => marginVertical || 'none'};
  margin-left: ${({ marginHorizontal }) => marginHorizontal || 'none'};
  margin-right: ${({ marginHorizontal }) => marginHorizontal || 'none'};

  ${({ shadow }) =>
    shadow &&
    css`
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    `}
  transition: all 0.2s;

  ${({ onlyText }) => onlyText && TextButton}
  &:active {
    transform: scale(0.85);
  }
`;

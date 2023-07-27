import styled from 'styled-components';
import { theme } from '../../styles/theme';

export const Container = styled.div<{ open: boolean }>`
  display: flex;
  background-color: ${({ theme }) => theme.colors.primary};
`;

interface WrapperHeaderProps {
  open: boolean;
}
export const WrapperHeader = styled.div<WrapperHeaderProps>`
  width: 100%;
  height: 60px;

  background-color: ${theme.colors.primary};

  display: flex;
  align-items: center;
  padding: 0px 10px;
`;

export const Title = styled.title`
  margin: 0px 10px;
  color: #fff;
  display: block;
`;

export const ButtonIcon = styled.button`
  background-color: transparent;
  border: none;
`;

export const WrapperBtnLogOut = styled.div`
  /* font-weight: ; */
  /* font-size: 2rem; */
  border-radius: 50%;
  border: 1px solid #fff;
  height: 2.5rem;
  width: 2.5rem;

  display: flex;
  justify-content: center;
  align-items: center;
`;

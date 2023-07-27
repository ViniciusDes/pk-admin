import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { theme } from '../../styles/theme';
import { css } from 'styled-components';

export const Container = styled.div`
  background-color: transparent;
`;

export const Wrapper = styled.div`
  height: 100%;

  flex-direction: column;
  display: flex;
  overflow: hidden;

  /* background: ${theme.colors.background}; */
  p.description-menu {
    padding-left: 10px;
  }
`;

export const HeaderMenu = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  padding: 0 10px;
  color: #363636;
  letter-spacing: 1px;

  p {
    font-size: 0.5rem;

    span {
      font-weight: bold;
    }
  }
`;

export const UserP = styled.p`
  margin-left: 15px;
  font-size: 0.9375rem;
  font-weight: bold;
  color: #363636;
`;

export const TitleHeader = styled.p`
  font-size: 0.75rem;
  font-weight: bold;
  color: #fff;
`;

export const WrapperHeaderMenu = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  height: 5rem;
  /* background: ${theme.colors.primary}; */
  span {
    font-size: 0.725rem;
  }
`;

export const Item = styled(Link)<{ active: string }>`
  display: flex;
  align-items: center;
  height: 15px;
  line-height: 15px;
  color: ${theme.colors.gray};
  padding: 15px;
  padding-right: 0;
  margin-bottom: 5px;
  ${({ active }) =>
    active === 'true' &&
    css`
      background: ${theme.colors.primary};
      color: #fff;
    `}

  &:focus,
  &:visited {
    /* background-color: red !important; */
  }

  width: 100%;
  font-family: Open Sans;
  font-size: 0.875rem;
  font-weight: 500;

  transition: background 0.3s;
  :hover {
    background: ${theme.colors.primary};
    color: #fff;
  }
`;

export const WrapperSubMenu = styled.div`
  padding-left: 20px;
  /* background-color: #234257; */
`;

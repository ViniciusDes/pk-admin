import styled from 'styled-components';
import { theme } from '../../styles/theme';

export const Container = styled.div`
  width: 100%;
  h1 {
    font-size: 1.25rem;
    font-weight: bold;
    line-height: 3rem;
    color: ${theme.colors.primary};
  }
`;

import styled from 'styled-components';

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
  height: ${({ height }) => height || '100%'};
  margin-top: ${({ marginVertical }) => marginVertical || 'none'};
  margin-bottom: ${({ marginVertical }) => marginVertical || 'none'};
  margin-left: ${({ marginHorizontal }) => marginHorizontal || 'none'};
  margin-right: ${({ marginHorizontal }) => marginHorizontal || 'none'};
`;

export const Wrapper = styled.div`
  width: 100%;
`;

export const Label = styled.label`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: ${({ theme }) => theme.colors.text};
  font-size: ${({ theme }) => theme.fontSize.sm};
  font-weight: 600;
`;

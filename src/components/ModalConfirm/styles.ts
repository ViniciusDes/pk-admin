import { theme } from '@/styles/theme';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;
  height: 100%;
  padding: 3.2rem 3.2rem 2.4rem 3.2rem;
`;

export const Row = styled.div`
  display: flex;
  align-items: center;
`;

export const Text = styled.p`
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 700;
  line-height: 2.4rem;
  letter-spacing: 0em;
  text-align: left;
  color: #000000d9;
  margin-left: 1rem;
`;

export const WrapperButtons = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 2.4rem;
`;

export const NoButton = styled.button`
  border-radius: 0.5rem;
  background: #ffffff;
  border: 0.1rem solid #d9d9d9;
  box-shadow: 0rem 0.2rem 0rem 0rem #00000004;
  padding: 0.2rem 1rem;
  margin-right: 0.8rem;
`;

export const NoText = styled.p`
  font-size: 1.4rem;
  font-style: normal;
  font-weight: 600;
  line-height: 2.2rem;
  letter-spacing: 0em;
  text-align: center;
  color: #000000d9;
`;

export const YesButton = styled.button`
  border-radius: 0.5rem;
  background: ${theme.colors.primary};
  border: none;
  box-shadow: 0rem 0.2rem 0rem 0rem #0000000b;
  padding: 0.2rem 1rem;
`;

export const YesText = styled.pre`
  font-size: 1.4rem;
  font-style: normal;
  font-weight: 600;
  line-height: 2.2rem;
  letter-spacing: 0em;
  text-align: center;
  color: #ffffff;
`;

import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  display: flex;
`;

export const WrapperChildrenPage = styled.main`
  width: 100%;
  height: calc(100vh - 64px);
  align-self: end;
`;

export const WrapperHeaderAndMenu = styled.main<{ open: boolean }>`
  display: 'flex';
  flex-direction: 'column';
  width: 100%;
`;

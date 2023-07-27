import { Styles } from 'react-modal';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  height: 100%;
  padding: 2rem;
  flex-direction: column;
  width: 100%;
  gap: 1rem;
  background-color: #fff;
  box-shadow: 0px 3.5px 5.5px rgba(0, 0, 0, 0.02);
  border-radius: 0.8rem;
`;

export const WrapperToolbar = styled.div`
  display: flex;
  align-items: center;
`;

export const ModalStyles: Styles = {
  overlay: {
    zIndex: 9999,
    background: 'rgba(0, 0, 0, 0.3)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    inset: 'auto',
    background: '#fafafa',
    padding: '2rem',
    // height: '40rem',
    // width: '70rem',
    border: 'none',
    borderRadius: '2px',
    // padding: 0,
    boxShadow: '0 14px 20px rgba(0,0,0,0.18), 0 10px 10px rgba(0,0,0,0.16)',
  },
};

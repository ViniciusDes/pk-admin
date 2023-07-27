import styled from 'styled-components';

export const Container = styled.div`
  padding: 0 9px;
  height: 2.2rem;
  margin: 0.5rem 0px;
`;

export const Span = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  height: 25px;
  width: 25px;
  background-color: #fff;
  border: 1px solid #000;

  :after {
    content: '';
    position: absolute;
    display: none;
  }

  :after {
    left: 9px;
    top: 5px;
    width: 5px;
    height: 10px;
    border: 1px solid #000;
    /* border: solid white; */
    border-width: 0 3px 3px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
  }
`;

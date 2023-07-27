import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 4fr);
  overflow: auto;

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 6fr);
  }

  @media (max-width: 700px) {
    grid-template-columns: repeat(1, 12fr);
  }

  gap: 10px;
  img {
    width: 100%;
  }
`;

export const Img = styled.img;

export const WrapperImg = styled.div`
  position: relative;
`;

export const WrapperIconClose = styled.div`
  position: absolute;
  right: 0;
  top: 0;

  margin: 3px 5px;
  padding: 2px;
  cursor: pointer;
  border: 1px solid #fff;
  border-radius: 50%;

  display: flex;
  justify-content: center;
`;

import styled from 'styled-components';

export const WrapperWebcam = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  /* position: absolute; */
  left: 0;
  right: 0;

  margin: 20px auto;
  /* width: 700px; */
  width: fit-content;

  video {
    height: fit-content;
  }
`;

export const WrapperPicture = styled.section`
  display: flex;
  width: fit-content;
  flex-direction: column;
  gap: 10px;
  margin: 20px auto;
  padding: 0 3.7rem;

  align-items: center;
  article {
  }
`;

export const WrapperOpenWebcam = styled.div`
  color: ${({ theme }) => theme.colors.primary};
  border: 1px solid ${({ theme }) => theme.colors.primary};
  border-radius: 10px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

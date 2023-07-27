import React, { useCallback, useRef, useState } from 'react';
import Webcam from 'react-webcam';
import { WrapperPicture, WrapperWebcam } from './styles';
import Button from '../Button';
import { Col, Row } from '../../styles/global';
import useWindowDimensions from '../../hooks/useWindowDimensions';
import { base64ToFile } from '../../services/global';
// import { Container } from './styles';

interface WebcamPhotoInterface {
  onAddPhoto: (imgSrc_: any) => void;
}

const WebcampPhoto: React.FC<WebcamPhotoInterface> = ({ onAddPhoto }) => {
  const [isCaptureEnable, setCaptureEnable] = useState<boolean>(true);
  const { width: widthScreen, height: heightScreen } = useWindowDimensions();
  const webcamRef = useRef<Webcam>(null);
  const [urlImage, setUrlImage] = useState<string | null>(null);
  const [file, setFile] = useState<File>();

  const capture = useCallback(() => {
    const imageSrc = webcamRef.current?.getScreenshot();
    if (imageSrc) {
      setUrlImage(imageSrc);
      setCaptureEnable(false);

      setFile(base64ToFile(imageSrc, ''));
    }
  }, [webcamRef]);

  const videoConstraints = {
    width: 720,
    height: 360,
    facingMode: 'user',
  };

  const defaultWidth = widthScreen > 1366 ? widthScreen : 600;
  const defaultHeight = heightScreen * 0.5 > 500 ? 500 : heightScreen * 0.5;
  return (
    <>
      {/* eslint-disable-next-line   */}
      {/* <div className=""></div> */}
      {/* {!isCaptureEnable && !urlImage && (
        <WrapperOpenWebcam onClick={() => setCaptureEnable(true)}>
          <AddAPhotoIcon
            fontSize="inherit"
            style={{
              width: '100px',
              height: '100px',
            }}
          />
          <span className="textDefault">Ativar câmera</span>
        </WrapperOpenWebcam>
      )} */}
      {urlImage && (
        <WrapperPicture>
          {/* <p className="textDefault">Foto:</p> */}
          <article>
            <img src={urlImage} alt="tool" width={widthScreen * 0.5} />
          </article>
          <Row algISelf="start" gap="10px">
            <Button
              color="#08806D"
              type="button"
              rounded
              size="SMALL"
              height="2.2rem"
              width="12rem"
              onClick={() => {
                setCaptureEnable(true);
                setUrlImage('');
              }}
            >
              Tirar outra
            </Button>
            {urlImage && (
              <Button
                // color="#08806D"
                type="button"
                rounded
                size="SMALL"
                height="2.2rem"
                width="12rem"
                onClick={() => onAddPhoto(file)}
              >
                Adicionar à lista
              </Button>
            )}
          </Row>
        </WrapperPicture>
      )}
      {isCaptureEnable && (
        <>
          <WrapperWebcam>
            <Webcam
              allowFullScreen
              audio={false}
              // width={widthScreen * 0.4 > defaultWidth ? defaultWidth : widthScreen * 0.4}
              width={widthScreen * 0.5}
              // height={defaultHeight}
              ref={webcamRef}
              screenshotFormat="image/png"
              videoConstraints={videoConstraints}
              capture="user"
            />
            <Col algISelf="start" mg="10px 0">
              <Button
                type="button"
                rounded
                size="SMALL"
                height="2.2rem"
                width="12rem"
                onClick={capture}
              >
                Tirar foto
              </Button>
            </Col>
          </WrapperWebcam>
          {/* eslint-disable-next-line react/button-has-type */}
        </>
      )}
    </>
  );
};

export default WebcampPhoto;

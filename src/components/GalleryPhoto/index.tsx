import React from 'react';
import { AiOutlineClose } from 'react-icons/ai';

import { Container, WrapperIconClose, WrapperImg } from './styles';
import { ImageData } from '../../interfaces/global';
import { theme } from '../../styles/theme';

interface GalleryPhotoProps {
  listPhotos: Array<ImageData>;
  onRemovePhoto: (item_: ImageData | undefined, index: number) => void;
}
const GalleryPhoto: React.FC<GalleryPhotoProps> = ({ listPhotos, onRemovePhoto }) => {
  return (
    <Container>
      {listPhotos.map((img, i_) => (
        <WrapperImg key={img.url}>
          <WrapperIconClose
            onClick={() => {
              const photoToRemove = listPhotos.find((item, i) => i === i_ && item);
              onRemovePhoto(photoToRemove, i_);
            }}
          >
            <AiOutlineClose size={20} color={theme.colors.background} />
          </WrapperIconClose>
          <img key={img.id} src={img.url} alt="hi" />
        </WrapperImg>
      ))}
    </Container>
  );
};

export default GalleryPhoto;
